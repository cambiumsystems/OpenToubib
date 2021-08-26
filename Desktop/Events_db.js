
const knex = require('./database');
knex('events')
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


let inf=[]
knex
.select('*')
.from('events')
.then((data) => {inf=data ;console.log( "voila ",inf);})

.catch((err) => console.log(err));


module.exports= inf ;