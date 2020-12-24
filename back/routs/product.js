const { createProduct ,  getProducts , getProductsBySlug ,  getProductDetailsById } = require("../controller/product");
const {
  // requireSignin,
  adminMiddleware,
} = require("../common-middleware/Middleware");

const express = require("express");
const router = express.Router();
const path = require("path");
router.post(
  "/product/create",
  // requireSignin,
  // adminMiddleware,
  createProduct
);

router.get("/products/:slug", getProductsBySlug);
// router.get('/category/getcategory', getCategories);
router.get("/product/:productId", getProductDetailsById);
// router.get("/product/:product", getProductDetailsBycategorry);

// router.delete(
//   "/product/deleteProductById",
//   requireSignin,
//   adminMiddleware,
//   deleteProductById
// );
router.post(
  "/product/getProducts",
  // requireSignin,
  // adminMiddleware,
  getProducts
);

module.exports = router;
