const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String },
  type: {
    type: String,
    enum: ["business", "product"],
  },
  img: { type: String },
  imgs: { type: [String] },
  category: {
    type: String,
    enum: [
      "Appliances",
      "Computing",
      "Phone and tablet",
      "Electronics",
      "Fashion",
      "Restaurants",
      "Transport and Logistic",
      "Hotel",
      "Travel and Booking",
    ],
  },
  location: {
    type: String,
    enum: ["Lagos", "Ibadan", "Oyo", "Osun", "Ondo"],
  },
  price: { type: Number },
  numOfReview: { type: Number, default: 0 },
  subCategory: { type: String },
  brand: { type: String },
  desc: { type: String },
  features: { type: [String] },
  specification: { type: [String] },
  avgrating: { type: Number, default: 0 },
});
//deleting the review if a product is remove
ItemSchema.pre("remove", async function () {
  await this.model("Reviews").deleteMany({ item: this._id });
});

module.exports = mongoose.model("Item", ItemSchema);
