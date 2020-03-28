const Sequelize = require('sequelize');


const client = new Sequelize(process.env.PG_URL);


// Test de la connection 
/*
client
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
*/

module.exports = client;