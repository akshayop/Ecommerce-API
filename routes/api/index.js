const express = require('express'); //importing express library
const router = express.Router(); 

router.use('/v1', require('./v1'));

// exporting router
module.exports = router;