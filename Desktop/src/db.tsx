import {secretKey as key} from './pages/RegisterForm.tsx';
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

var sqlite3 = require('@journeyapps/sqlcipher').verbose();
var db = new sqlite3.Database(`${dataPath}/opentoubib.db`);


//To init
export async function initDb(secretKey) {
  if (secretKey != null) {
    await db.serialize(async function  () {
      // This is the default, but it is good to specify explicitly:
      await db.run('PRAGMA cipher_compatibility = 4');

      // To open a database created with SQLCipher 3.x, use this:
      // db.run("PRAGMA cipher_compatibility = 3");

      await db.run(`PRAGMA key = ${secretKey}`)
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
export function insertDb(secretKey, values) {
  if (secretKey != null) {
    db.serialize( function () {
      db.run('PRAGMA cipher_compatibility = 4');

      // To open a database created with SQLCipher 3.x, use this:
      // db.run("PRAGMA cipher_compatibility = 3");

      db.run(`PRAGMA key = ${secretKey}`)
        .run(
          'CREATE TABLE  IF NOT EXISTS doctor ( firstName TEXT NOT NULL, lastName TEXT NOT NULL, email TEXT NOT NULL UNIQUE, phone TEXT NOT NULL UNIQUE, password TEXT NOT NULL, gender TEXT NOT NULL, dateOfBirth TEXT NOT NULL, city TEXT NOT NULL, region TEXT NOT NULL, country TEXT NOT NULL, address TEXT NOT NULL, postalCode TEXT NOT NULL, secretQuest TEXT NOT NULL, answerScrtQuest TEXT NOT NULL, description TEXT NOT NULL, officeName TEXT NOT NULL, speciality TEXT NOT NULL, professionalID TEXT NOT NULL, rdvGap INTEGER NOT NULL, minFee INTEGER NOT NULL, maxFee INTEGER NOT NULL, minTeleFee INTEGER NOT NULL, maxTeleFee INTEGER NOT NULL, privateKey TEXT, publicKey TEXT, days TEXT)'
        )
        .run(
          'CREATE TABLE  IF NOT EXISTS events (start TEXT NOT NULL, end TEXT NOT NULL, title TEXT NOT NULL, categorie TEXT)'
        )
        .run('CREATE TABLE  IF NOT EXISTS schedule (days TEXT)')
        .run('CREATE TABLE  IF NOT EXISTS prescriptions ( TEXT)');

    var stmt1 = db.prepare(`INSERT INTO events VALUES (?,?,?,?)`);
    stmt1.run('2021-09-23 08:22:00', '2021-09-23 09:00:00', 'Consultation', '1');
    stmt1.run('2021-09-28 08:22:00', '2021-09-28 09:00:00', 'Controle', '1');
    stmt1.finalize();
      const stmt = db.prepare(
        `INSERT INTO doctor VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
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
        values.days
      );
      stmt.finalize();
      return true;
    });
  }
}
export function getDoctor(secretKey, setDoctor) {
  if (secretKey != null) {
    db.serialize( function () {
      db.run(`PRAGMA key = ${secretKey}`);
      db.each('SELECT * FROM doctor', function (err, row) {
        console.log(row);
        setDoctor(row);
        return row;
      });
    });
  }
}
export function getEvents(secretKey, setEvents) {
  if (secretKey != null) {
    let events;
    db.serialize( function () {
    db.run(`PRAGMA key = ${secretKey}`);
    db.all("SELECT rowid AS id, start, end, title FROM events", function(err, data) {
      console.log(data);
      setEvents(data);
  });
    return events;
  });
  }
}
export async function Login(secretKey, setisKey, setSecretKey) {
  if (secretKey != null ) {
    if(key==null || (key!=null && secretKey==key))
    {
      await db.serialize( async function () {
      db.run(`PRAGMA key = ${secretKey}`);
      await db.all("SELECT email, password FROM doctor", function(err, data) {
        console.log(data);
        if(data!=undefined || (key!= null && secretKey==key))
       { setisKey(true);
        setSecretKey(secretKey);
        return;}
    });
      setisKey(false);
    });}
}
setisKey(false);
}
export function closeDB(secretKey) {
  if (secretKey != null) {
    db.serialize( function () {
    db.run(`PRAGMA key = ${secretKey}`);
    db.close();
  });
}
}
