if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express');
const app = express();

app.use(express.static('public'));

const router = require('./app/router');
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});