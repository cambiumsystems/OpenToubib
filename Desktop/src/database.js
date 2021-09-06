const path = require('path');

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'opentoubib.db');

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

knex.schema
  .hasTable('doctor')
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable('doctor', (table) => {
          table.increments('id').primary();
          // table.integer('')
          table.string('firstName');
          table.string('lastName');
          table.string('password');
          table.string('email');
          table.string('gender');
          table.string('dateOfBirth');
          table.string('city');
          table.string('region');
          table.string('country');
          table.string('address');
          table.string('postalCode');
          table.text('secretQuest');
          table.string('answerScrtQuest');
          table.text('description');
          table.string('officeName');
          table.string('speciality');
          table.string('professionalID');
          table.string('phoneNumber');
          table.string('rdvGap');
          table.string('minFee');
          table.integer('maxFee');
          table.integer('minTeleFee');
          table.integer('maxTeleFee');
          table.string('privateKey');
          table.string('publicKey');
        })
        // eslint-disable-next-line promise/always-return
        .then(() => {
          // Log success message
          console.log("Table 'Doctor' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
    })
    // eslint-disable-next-line promise/always-return
  .then(() => {
    // Log success message
    console.log('done');
  })
  .catch((error) => {
    // eslint-disable-next-line prettier/prettier
      console.error(`There was an error setting up the database: ${error}`)
    })
    knex.schema
    .hasTable('events')
    .then((exists) => {
      if (!exists) {
        return knex.schema
          .createTable('events', (table) => {
            table.increments('id').primary();
            // table.integer('')
            table.datetime('start');
            table.datetime('end');
            table.string('title');
            table.string('categorie');

          })
          // eslint-disable-next-line promise/always-return
          .then(() => {
            // Log success message
            console.log("Table 'events' created");
          })
          .catch((error) => {
            console.error(`There was an error creating table: ${error}`);
          });
      }
      })
      // eslint-disable-next-line promise/always-return
    .then(() => {
      // Log success message
      console.log('done');
    })
    .catch((error) => {
      // eslint-disable-next-line prettier/prettier
        console.error(`There was an error setting up the database: ${error}`)
      })


// Table RDVS
knex.schema
  .hasTable('schedule')
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable('schedule', (table) => {
          table.increments('id').primary();
          // table.integer('')
          table.string('day');
          table.string('startMorning');
          table.string('endMorning');
          table.string('startAfternoon');
          table.string('endAfternoon');
          table.bigInteger('doctorId')
    .unsigned()
    .index()
    .references('id')
    .inTable('Doctor');
        })
        // eslint-disable-next-line promise/always-return
        .then(() => {
          // Log success message
          console.log("Table 'Schedule' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
    })
    // eslint-disable-next-line promise/always-return
  .then(() => {
    // Log success message
    console.log('Table Schedule created');
  })
  .catch((error) => {
    // eslint-disable-next-line prettier/prettier
      console.error(`There was an error setting up the database: ${error}`)
    })

knex
  .select('*')
  .from('doctor')
  .then((data) => console.log('data:', data))
  .catch((err) => console.log(err));

// Export the database
/*knex('events')
.insert({
  // insert new record, a book
  start: "2021-08-26 12:34:36",
 end: "2021-08-26 12:50:36",
  title: "event"
})
// eslint-disable-next-line promise/always-return
.then(() => {
  // Send a success message in response
  // eslint-disable-next-line no-console
  console.log('AN event object created!!');
})
.catch((err) => {
  // Send a error message in response
  // eslint-disable-next-line no-console
  console.log(err);
});
knex
  .select('*')
  .from('events')
  .then((data) => console.log('data:', data))
  .catch((err) => console.log(err));

*/

// Export the database
module.exports = knex;
