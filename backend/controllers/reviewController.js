const Review = require("../models/Review");
const BadRequestError = require("../errors/BadrequestError");
const NotFoundError = require("../errors/NotFoundError");
const { StatusCodes } = require("http-status-codes");

const createReview = async (req, res) => {
  const { id } = req.params;
  const {userId}=req.user

  const { title, detail, rating } = req.body;
  req.body.productId = id;
  req.body.reviewer=userId
  if (!title || !detail || !rating) {
    throw new BadRequestError("Please Provide all the fields");
  }
  const review = await Review.create(req.body);
  res.status(StatusCodes.OK).json({ review });
};
const deleteReview = async (req, res) => {
  const { id } = req.params;
 const review= await Review.findOneAndDelete({ _id: id });
 if (!review){throw new  NotFoundError(`No review with this ${id}`)}
  res.status(StatusCodes.OK).json("deleted successfully");
};
const updateReview = (req, res) => {
  res.status(200).json("creating review");
};
const getAlReviews = async (req, res) => {
  const reviews = await Review.find({});
  res.status(StatusCodes.OK).json(reviews);
};
const getSingleReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findOne({ _id: id });
  res.status(StatusCodes.OK).json(review);
};

module.exports = {
  getAlReviews,
  getSingleReview,
  deleteReview,
  updateReview,
  createReview,
};
