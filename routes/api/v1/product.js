const express = require('express');  //importing express library
const router = express.Router();
const productController = require('../../../controllers/api/v1/product_controller'); //importing the product controller fro controllers

router.post('/create-product', productController.createProduct); //creating a new product

module.exports = router;

