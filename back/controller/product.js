const Product = require("../model/productSchema");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require("../model/categorySchema");

exports.createProduct = (req, res) => {
  //res.status(200).json( { file: req.files, body: req.body } );

  const { name, price, description, category, quantity, productPicture } = req.body;
 
  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPicture,
    category : req.category._id,
   
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, files: req.files });
    }
  });
};

exports.getProductsBySlug = (req, res) => {
  const { slug } = req.params;
  Category.findOne({ slug: slug })
    .select("_id type")
    .exec((error, category) => {
      if (error) {
        return res.status(400).json({ error });
      }
      

      // if (category) {
      //   Product.find({ category: category._id }).exec((error, products) => {
      //     if (error) {
      //       return res.status(400).json({ error });
      //     }

          // if (category.type) {
          //   if (products.length > 0) {
          //     res.status(200).json({
          //       products,
          //     productCategory: {
          //       Dress,
          //       Suits,
          //       HairSalons,
          //       Accessories,
          //       BrideShoes,
          //       hairstyle,
          //       GroomShoes,
          //       accessories
          //     },
          //       productsBycategory: {

          //         Dress: products.filter((product) => product.category = Dress),
          //         Suits: products.filter( (product) => product.category = Suits),
          //         HairSalons: products.filter((product) => product.category = HairSalons),
          //         Accessories: products.filter( (product) => product.category = Accessories),
          //         BrideShoes: products.filter((product) => product.category= BrideShoes),
          //         hairstyle: products.filter((product) => product.category= hairstyle),
          //         GroomShoes: products.filter((product) => product.category= GroomShoes),
          //         accessories: products.filter((product) => product.category= accessories),
          //       },
          //     });
          //   }
          // } else {
          //   res.status(200).json({ products });
          // }
        // });
      // }
    });
};

exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
};



// new update
// exports.deleteProductById = (req, res) => {
//   const { productId } = req.body.payload;
//   if (productId) {
//     Product.deleteOne({ _id: productId }).exec((error, result) => {
//       if (error) return res.status(400).json({ error });
//       if (result) {
//         res.status(202).json({ result });
//       }
//     });
//   } else {
//     res.status(400).json({ error: "Params required" });
//   }
// };

exports.getProducts = async (req, res) => {
  const products = await Product.find({ category: req.category._id })
    .select("_id name price quantity slug description productPictures category")
    .populate({ path: "category", select: "_id name" })
    .exec();

  res.status(200).json({ products });
};
      