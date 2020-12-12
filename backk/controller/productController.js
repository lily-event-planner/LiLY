const Product = require('../model/productSchema').product
const subcategory = require ('../model/subcategorySchema').subcategory


// add one product to database 
exports.addProduct = async(req , res) => {
    const product = new Product({
        name: req.body.name,
        img: req.body.img,
        price : req.body.price,
        description: req.body.description,
        subCategory: req.body.subcategory
    })

// save one product in database 
    try {
        const savedProduct = await product.save();
        res.send({ savedProduct });
    }
    catch (err) {
        res.status(400).send(err)
        
    }
    
}

//delete one product from database 
exports.deleteProduct = async(req ,res) => {
    let _id = req.params.id 
    console.log(_id)
    let deleteProduct = await Product.findOne({_id}) 
    console.log(deleteProduct)
    Product.deleteOne({_id})
    .then((Product) => res.status(200).json(deleteProduct))
    .catch((err) => res.status(404).json({success:false}))
};