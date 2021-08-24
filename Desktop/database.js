const { TableSortLabel } = require('@material-ui/core');
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
  .hasTable('doctors')
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable('doctors', (table) => {
          table.increments('id').primary();
          // table.integer('')
          table.string('firstName');
          table.string('lastName');
          table.string('password');
          table.date('dateOfBirth');
          table.string('city');
          table.string('address');
          table.integer('fee');
          table.text('secretQuest');
          table.text('description');
          table.string('postalCode');
          table.string('country')
          table.string('phoneNumber');
          table.string('gender');
          table.integer('feeTeleconsultation');
        })
        // eslint-disable-next-line promise/always-return
        .then(() => {
          // Log success message
          console.log("Table 'Doctors' created");
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


knex
  .select('*')
  .from('doctors')
  .then((data) => console.log('data:', data))
  .catch((err) => console.log(err));

// Export the database
module.exports = knex;
