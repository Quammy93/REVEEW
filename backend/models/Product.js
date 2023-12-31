const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_name: { type: String },
  img: { type: String },
  product_imgs: { type: [String] },
  product_category: {
    type: String,
    enum: [
      "Appliances",
      "Computing",
      "Phone and tablet",
      "Electronics",
      "Fashion",
    ],
  },
  price: { type: Number },
  numOfReview: { type: Number, default: 0 },
  product_subCategory: { type: String },
  product_brand: { type: String },
  product_desc: { type: String },
  product_features: { type: [String] },
  specification: { type: [String] },
  product_Avgrating: { type: Number, default: 0 },
});
//deleting the review if a product is remove
ProductSchema.pre("remove", async function () {
  await this.model("Reviews").deleteMany({ product: this._id });
});

module.exports = mongoose.model("Product", ProductSchema);
