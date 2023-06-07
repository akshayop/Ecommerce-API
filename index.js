const express = require('express'); //Importing express library
const app = express(); //creating express app instance
require('dotenv').config();
const port = process.env.PORT || 4000; //port number where our server will run
const db = require('./config/mongoose'); //Importing db from config

// to parse the body request
app.use(express.urlencoded({extended: true}));

// use express router
app.use('/', require('./routes'));


// Hosting the server and handling the error in case of any problem occurs while hosting
app.listen(port, (err) => {
    if(err) {
        console.log('error while hosting the server', err);
        return
    }

    console.log(`Server is successfully up and running on port: ${port}`);
});