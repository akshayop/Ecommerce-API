const express = require('express'); //importing express library
const router = express.Router(); 

router.use('/products', require('./product'));

// exporting router
module.exports = router;