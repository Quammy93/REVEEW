const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
  business_name: { type: String },
  business_img: { type: String },

  business_category: {
    type: String,
    enum: [
      "Restaurants",
      "Transport and Logistic",
      "Hotel",
      "Travel and Booking",
    ],
  },
  business_location: {
    type: String,
    enum: ["Lagos", "Ibadan", "Oyo", "Osun", "Ondo"],
  },

  numOfReview: { type: Number, default: 0 },

  Business_desc: { type: String },
  Business_features: { type: [String] },
  specification: { type: [String] },
  Business_Avgrating: { type: Number, default: 0 },
});
//deleting the review if a product is remove
BusinessSchema.pre("remove", async function () {
  await this.model("Reviews").deleteMany({ business: this._id });
});

module.exports = mongoose.model("Business", BusinessSchema);
