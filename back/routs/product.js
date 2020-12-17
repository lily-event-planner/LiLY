const { createProduct } = require("../controller/product");
const {
  requireSignin,
  adminMiddleware,
} = require("../common-middleware/Middleware");
const multer = require("multer");
const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "upload"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct
);

//router.get("/category/getCategories", getCategories);

module.exports = router;
