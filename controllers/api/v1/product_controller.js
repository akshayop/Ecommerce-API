const Product = require('../../../models/product'); //importing product model

// creating a new product
module.exports.createProduct = async (req, res) => {
    try {

        const product = await Product.create(req.body);

        return res.status(200).json({
            data: {
                name: product.name,
                quantity: product.quantity
            },
            message: "Product added...!"
        })

    }catch (err) {
        console.log('error',err); //to display error in console

        // throw error on failure 
        return res.status(400).json({
            message: "Error in creating a new product"
        })
    }
}