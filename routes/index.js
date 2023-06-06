const express = require('express'); //importing express library
const router = express.Router(); 
const homeController = require('../controllers/home_controller'); //importing home controller from controller

router.get('/', homeController.home);
router.use('/api', require('./api'));

// exporting router
module.exports = router;
