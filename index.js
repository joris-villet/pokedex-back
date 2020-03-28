const express = require('express');
const app = express();




const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

const Pokemon = require('./app/models/pokemon');
const Type = require('./app/models/type');

Pokemon.findAll().then( (results) => {
    console.log(results);
}).catch( err => {
console.error(err);
});

const router = require('./app/router');
app.use(router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});