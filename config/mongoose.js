const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/ecommerceAPI')
    
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