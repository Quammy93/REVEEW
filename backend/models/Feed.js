const mongoose = require("mongoose");
const { format } = require("date-fns");
const { enUS } = require("date-fns/locale");


const FeedSchema = new mongoose.Schema(
  {
    formattedTimestamp: String,
    date_posted: { type: Date, default: Date.now() },
    poster: { type: String },
    feed_img: { type: String },
    poster_img: { type: String },
    content: { type: String },
    title: { type: String },
    feed_link: { type: String },
    userLike: { type: Boolean, default: false },
  },
  { timestamps: true }
);
//formatting the date
FeedSchema.pre("save", function (next) {

  this.formattedTimestamp = format(this.date_posted, "d MMMM yyyy", {
    locale: enUS,
  });
  next();
});

module.exports = mongoose.model("Feed", FeedSchema);
