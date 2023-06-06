
// Home controller 

module.exports.home = (req, res) => {
    // redirect to products list
    return res.redirect('/api/v1/products');
}