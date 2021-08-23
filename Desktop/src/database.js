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
        return knex.schema.createTable('doctors', (table)  => {
          table.increments('id').primary()
          // table.integer('')
          table.string('firstName')
          table.string('lastName')
          table.string('password')
          // table.integer('')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Doctors\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })


knex.select('*').from('doctors')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex;
