import { secretKey as key } from './pages/RegisterForm.tsx';
const path = require('path');
// To get the database path defined as ExtraFiles in package.json
const getExtraFilesPath = () => {
  return path.join(process.resourcesPath, '..'); // go up one directory
};
// Get the database file path
const dataPath =
  process.env.NODE_ENV === 'development'
    ? path.join(__dirname, '../db')
    : path.join(getExtraFilesPath(), 'db');
// Connect to the database
var sqlite3 = require('@journeyapps/sqlcipher').verbose();
var db = new sqlite3.Database(`${dataPath}/opentoubib.db`);

//To init
export async function initDb(secretKey) {
  if (secretKey != null) {
    await db.serialize(async function () {
      // This is the default, but it is good to specify explicitly:
      await db.run('PRAGMA cipher_compatibility = 4');

      // To open a database created with SQLCipher with the key

      await db
        .run(`PRAGMA key = ${secretKey}`)
        .run(
          'CREATE TABLE  IF NOT EXISTS doctor ( firstName TEXT NOT NULL, lastName TEXT NOT NULL, email TEXT NOT NULL UNIQUE, phone TEXT NOT NULL UNIQUE, password TEXT NOT NULL, gender TEXT NOT NULL, dateOfBirth TEXT NOT NULL, city TEXT NOT NULL, region TEXT NOT NULL, country TEXT NOT NULL, address TEXT NOT NULL, postalCode TEXT NOT NULL, secretQuest TEXT NOT NULL, answerScrtQuest TEXT NOT NULL, description TEXT NOT NULL, officeName TEXT NOT NULL, speciality TEXT NOT NULL, professionalID TEXT NOT NULL, rdvGap INTEGER NOT NULL, minFee INTEGER NOT NULL, maxFee INTEGER NOT NULL, minTeleFee INTEGER NOT NULL, maxTeleFee INTEGER NOT NULL, privateKey TEXT, publicKey TEXT, days TEXT)'
        )
        .run(
          'CREATE TABLE  IF NOT EXISTS events (start TEXT NOT NULL, end TEXT NOT NULL, title TEXT NOT NULL, categorie TEXT)'
        )
        .run('CREATE TABLE  IF NOT EXISTS schedule (days TEXT)');
      return true;
    });
  }
}
// Insert in the database the doctor informations for the first time

export function insertDb(
  secretKey,
  values, // values are the informations inserted in the form
  encryptionKey // The random bytes generated while signing up to use as a key to encrypt files
) {
  if (secretKey != null) {
    db.serialize(function () {
      db.run('PRAGMA cipher_compatibility = 4');

      db.run(`PRAGMA key = ${secretKey}`)
        .run(
          'CREATE TABLE  IF NOT EXISTS doctor ( firstName TEXT NOT NULL, lastName TEXT NOT NULL, email TEXT NOT NULL UNIQUE, phone TEXT NOT NULL UNIQUE, password TEXT NOT NULL, gender TEXT NOT NULL, dateOfBirth TEXT NOT NULL, city TEXT NOT NULL, region TEXT NOT NULL, country TEXT NOT NULL, address TEXT NOT NULL, postalCode TEXT NOT NULL, secretQuest TEXT NOT NULL, answerScrtQuest TEXT NOT NULL, description TEXT NOT NULL, officeName TEXT NOT NULL, speciality TEXT NOT NULL, professionalID TEXT NOT NULL, rdvGap INTEGER NOT NULL, minFee INTEGER NOT NULL, maxFee INTEGER NOT NULL, minTeleFee INTEGER NOT NULL, maxTeleFee INTEGER NOT NULL, privateKey TEXT, publicKey TEXT, days TEXT,encryptionKey TEXT, signature TEXT, seal TEXT)'
        )
        .run(
          'CREATE TABLE  IF NOT EXISTS events (start TEXT NOT NULL, end TEXT NOT NULL, title TEXT NOT NULL, isTeleconsultation TEXT)'
        )
        .run('CREATE TABLE  IF NOT EXISTS schedule (days TEXT)')
        .run('CREATE TABLE  IF NOT EXISTS prescriptions ( TEXT)');
      // these are some events inserted as well as an example
      var stmt1 = db.prepare(`INSERT INTO events VALUES (?,?,?,?)`);
      stmt1.run(
        '2021-09-23 08:22:00',
        '2021-09-23 09:00:00',
        'Consultation',
        '1'
      );
      stmt1.run('2021-09-13 10:02:00', '2021-09-13 10:20:00', 'Analyses', '1');
      stmt1.run('2021-09-08 13:22:00', '2021-09-08 14:00:00', 'Scanner', '0');
      stmt1.finalize();
      // Prepare the statement for inserting doctors info
      const stmt = db.prepare(
        `INSERT INTO doctor VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?)`
      );
      stmt.run(
        values.firstName,
        values.lastName,
        values.email,
        values.phoneNumber,
        values.password,
        values.gender,
        `${values.dobYear}-${values.dobMonth}-${values.dobDay}`,
        values.city,
        values.region,
        values.country,
        values.address,
        values.postalCode,
        values.secretQuest,
        values.answerScrtQuest,
        values.description,
        values.officeName,
        values.speciality,
        values.professionalID,
        values.rdvGap,
        values.minFee,
        values.maxFee,
        values.minTeleFee,
        values.maxTeleFee,
        values.privateKey,
        values.publicKey,
        values.days,
        encryptionKey,
        null,
        null
      );
      stmt.finalize();
      return true;
    });
  }
}
// Get doctors profile informations
export function getDoctor(secretKey, setDoctor) {
  if (secretKey != null) {
    db.serialize(function () {
      db.run(`PRAGMA key = ${secretKey}`);
      db.each('SELECT * FROM doctor', function (err, row) {
        console.log(row);
        setDoctor(row);
        return row;
      });
    });
  }
}
// Get today's events for Next Appointment
export function getTodayEvents(secretKey, setTodayEvents) {
  if (secretKey != null) {
    let inf = [];
    db.serialize(async function () {
      await db.run(`PRAGMA key = ${secretKey}`);
      await db.each(
        'SELECT rowid as id, start, end, title, isTeleconsultation FROM events ORDER BY start ASC',
        function (err, row) {
          // Get the event's date without hours
          let test = new Date(row.start).setHours(0, 0, 0, 0);
          // get Today's date without hours
          let today = new Date().setHours(0, 0, 0, 0);
          // Today's time in milliseconds
          let tod = new Date().getTime();
          // Get the event's time in milliseconds
          let date = new Date(row.start).getTime();
          // This test to get today's events that didn't happen yet
          // It compares if the date of the event is today's date and its time is higher than now's time
          if (date > tod && test == today) {
            inf.push(row);
            console.log('today rdvs', row);
            setTodayEvents(inf);
            console.log(inf);
          }
        }
      );
    });
  }
}
//Get all the events in the database
export function getEvents(secretKey, setEvents) {
  if (secretKey != null) {
    let events;
    db.serialize(function () {
      db.run(`PRAGMA key = ${secretKey}`);
      db.all(
        'SELECT rowid AS id, start, end, title, isTeleconsultation FROM events',
        function (err, data) {
          console.log(data);
          setEvents(data);
        }
      );
      return events;
    });
  }
}
//Login Function to test if the passord is right which is the key at the same time
export async function Login(secretKey, setisKey, setSecretKey) {
  if (secretKey != null) {
    if (key == null || (key != null && secretKey == key)) {
      await db.serialize(async function () {
        await db.run(`PRAGMA key = ${secretKey}`);
        await db.all('SELECT email, password FROM doctor', function (
          err,
          data
        ) {
          console.log(data);
          if (data != undefined || (key != null && secretKey == key)) {
            setisKey(true);
            setSecretKey(secretKey);
            return;
          }
        });
        setisKey(false);
      });
    }
  }
  setisKey(false);
}
//Get The encryption Key used to encrypt files such as signature and seal
export function getEncryptionKey(secretKey, setEncryptionKey) {
  if (secretKey != null) {
    db.serialize(function () {
      db.run(`PRAGMA key = ${secretKey}`);
      db.all('SELECT encryptionKey FROM doctor', function (err, data) {
        console.log(data);
        setEncryptionKey(data);
      });
    });
  }
}
//Insert the signature uploaded by the doctor
export function insertSignature(secretKey, path) {
  if (secretKey != null) {
    db.serialize(function () {
      db.run(`PRAGMA key = ${secretKey}`);
      var stmt = db.prepare('UPDATE doctor SET signature = ? WHERE rowid=1 ');
      stmt.run(path);
      stmt.finalize();
    });
  }
}
// Insert the seal uploaded by doctor
export function insertSeal(secretKey, path) {
  if (secretKey != null) {
    db.serialize(function () {
      db.run(`PRAGMA key = ${secretKey}`);
      var stmt = db.prepare('UPDATE doctor SET seal = ? WHERE rowid=1 ');
      stmt.run(path);
      stmt.finalize();
    });
  }
}
// Close the database but still not used
// export function closeDB(secretKey) {
//   if (secretKey != null) {
//     db.serialize( function () {
//     db.run(`PRAGMA key = ${secretKey}`);
//     db.close();
//   });
// }
// }
