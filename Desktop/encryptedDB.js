//import { secretkey } from './src/pages/Login';
var sqlite3 = require('@journeyapps/sqlcipher').verbose();
const path = require('path');
var db = new sqlite3.Database('opentoubib1.db');


 //if(secretkey!=null){
   db.serialize(function () {
    // This is the default, but it is good to specify explicitly:
    db.run('PRAGMA cipher_compatibility = 4');

    // To open a database created with SQLCipher 3.x, use this:
    // db.run("PRAGMA cipher_compatibility = 3");

    db.run(`PRAGMA key = 'Nore1234'`)
      .run(
        'CREATE TABLE  IF NOT EXISTS doctor ( firstName TEXT NOT NULL, lastName TEXT NOT NULL, email TEXT NOT NULL UNIQUE, phone TEXT NOT NULL UNIQUE, password TEXT NOT NULL, gender TEXT NOT NULL, dateOfBirth TEXT NOT NULL, city TEXT NOT NULL, region TEXT NOT NULL, country TEXT NOT NULL, address TEXT NOT NULL, postalCode TEXT NOT NULL, secretQuest TEXT NOT NULL, answerScrtQuest TEXT NOT NULL, description TEXT NOT NULL, officeName TEXT NOT NULL, speciality TEXT NOT NULL, professionalID TEXT NOT NULL, rdvGap INTEGER NOT NULL, minFee INTEGER NOT NULL, maxFee INTEGER NOT NULL, minTeleFee INTEGER NOT NULL, maxTeleFee INTEGER NOT NULL, privateKey TEXT, publicKey TEXT, days TEXT)'
      )
      .run(
        'CREATE TABLE  IF NOT EXISTS events (start TEXT NOT NULL, end TEXT NOT NULL, title TEXT NOT NULL, categorie TEXT)'
      )
      .run('CREATE TABLE  IF NOT EXISTS schedule (days TEXT)');

   var stmt=db.prepare(`INSERT INTO events VALUES (?,?,?,?,?)`);
    // // // // // //db.run("INSERT INTO lorem VALUES ('j',${kiki})");
    // // // // // // for (var i = 0; i < 10; i++) {
    stmt.run('2021-09-17 17:20:00','2021-09-17 17:25:00','Consultation', '1','1');

   //db.run("DELETE FROM events WHERE start='2021-09-14 12:50:00'");
    // }
    // stmt.finalize();
     //db.run("DROP TABLE doctor");
     //db.run('DELETE FROM doctor WHERE rowid = ?', 1);

    db.each("SELECT * FROM doctor", function(err, row) {
        console.log(row);
    });
    db.each("SELECT * FROM events", function(err, row) {
      console.log(row);
  });
  });
//}
//db.close();
