const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.DB_URI)
    
    .then( () => {
        console.log("Db Connected successfully");
    }).catch( (err) => {
        console.log('error while connecting DB', err);
    });

let db = mongoose.connection;

db.on('error', (err) => {
    console.log('something went wrong while connecting db', err);
});

db.once('open', () => {
    console.log("db connection successfull.......");
});

module.exports = db;