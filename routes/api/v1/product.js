const express = require('express');  //importing express library
const router = express.Router();
const productController = require('../../../controllers/api/v1/product_controller'); //importing the product controller fro controllers

router.get('/', productController.allProduct); // displaying all the products
router.post('/create-product', productController.createProduct); //creating a new product
router.post('/:id/update-quantity', productController.updateQuantity); //updating a product with the givenid to the given amount


module.exports = router;

