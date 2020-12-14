const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
    productPictures: [{ img: { type: String } }],

    reviewes: [
      {
        userId: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    review: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
