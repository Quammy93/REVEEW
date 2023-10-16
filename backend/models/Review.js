const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    review_date: { type: Date },
    title: { type: String },
    detail: { type: String },
    rating: { type: Number, default: 0 },
    reviewer: { type: mongoose.Types.ObjectId, ref: "User" },
    product_reviewed: { type: mongoose.Types.ObjectId, ref: "Product" },
    productId: { type: String },
  },
  { timestamps:true }
);

module.exports = mongoose.model("Review", ReviewSchema);
