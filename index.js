const express = require('express'); //Importing express library
const app = express(); //creating express app instance
const port = 8000;


app.listen(port, (err) => {
    if(err) {
        console.log('error while hosting the server', err);
        return
    }

    console.log(`Server is successfully up and running on port: ${port}`);
});