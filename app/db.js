const { Sequelize } = require('sequelize');


require('dotenv').config();
// Option 2: Passing parameters separately (other dialects)
const client = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});


// Test de la connection 

client
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = client;