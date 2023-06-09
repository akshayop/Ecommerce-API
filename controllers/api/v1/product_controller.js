const Product = require('../../../models/product'); //importing product model

// creating a new product
module.exports.createProduct = async (req, res) => {
    try {

        const checkProduct = await Product.findOne({name: req.body.name}); //find the user by name 

        // if not found

        if(!checkProduct) {
            const product = await Product.create(req.body);

            return res.status(200).json({
                data: {
                    name: product.name,
                    quantity: product.quantity
                },
                message: "Product added...!"
            })
        } else {

            return res.status(200).json({
                message: "Product already exists ...!"
            })

        }

    }catch (err) {
        console.log('error',err); //to display error in console

        // throw error on failure 
        return res.status(500).json({
            message: "Error in creating a new product"
        })
    }
}

// toget all the product from db

module.exports.allProduct = async (req, res) => {

    try {

        const products = await Product.find({});

        if(products.length < 1) {
            return res.status(200).json({
                message: "No Products Found"
            });
        }

        if(products) {
            return res.status(200).json({
                data: {
                    Products: products
                },
                message: "These are the products in inventory"
            });
        }

    } catch (err) {

        console.log('error',err); //to display error in console

        // throw error on failure 
        return res.status(500).json({
            message: "Error in fetching products"
        })

    }
}


// to update the product in db
module.exports.updateQuantity = async (req, res) => {
    try {
        // fetching the products by id
        let product = await Product.findById(req.params.id);

        // if product is not found
        if(!product) {
            return res.status(404).json({
                message: "Product not found...!"
            });
        }

        // updating the quantity of the selected product
        product.quantity += parseInt(req.query.number, 10);

        if(product.quantity < 0) {
            return res.status(404).json({
                message: "product Quantity cannot be -ve"
            })
        }

        let updateProduct = await product.save();
        
        // on success show the updated product
        return res.status(200).json({
            data: {
                product: {
                    name: updateProduct.name,
                    quantity: updateProduct.quantity
                }
            },
            message: "Product Updated!"
        });

        
    } catch (err) {

        console.log('error',err); //to display error in console

        // throw error on failure 
        return res.status(500).json({
            message: "Error in updating Quantity"
        });
        
    }
}

// deleting selected product from db
module.exports.deleteProduct = async (req, res) => {

    try {

        // fetching product from db and deleting it
        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product) {
            // throws error

            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            data: {
                product: {
                    id: product.id,
                    name: product.name,
                    quantity: product.quantity
                }
            },

            message: "Product deleted....!"
        });

    }catch (err) {
        console.log('error',err); //to display error in console

        // throw error on failure 
        return res.status(500).json({
            message: "Error in deleting product"
        });
    }
}