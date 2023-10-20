const Reviews = require("../models/Reviews");
const BadRequestError = require("../errors/BadrequestError");
const NotFoundError = require("../errors/NotFoundError");
const { StatusCodes } = require("http-status-codes");

const createReview = async (req, res) => {
  const { id } = req.params;
 // const { userId } = req.user;
  console.log(userId);

  const { title, detail, rating } = req.body;
  req.body.product_reviewed = id;
  //req.body.reviewer = userId;
  if (!title || !detail || !rating) {
    throw new BadRequestError("Please Provide all the fields");
  }
  const review = await Reviews.create(req.body);
  res.status(StatusCodes.OK).json({ review });
};
const deleteReview = async (req, res) => {
  const { id } = req.params;
  const review = await Reviews.findOneAndDelete({ _id: id });
  if (!review) {
    throw new NotFoundError(`No review with this ${id}`);
  }
  res.status(StatusCodes.OK).json("deleted successfully");
};
const updateReview = (req, res) => {
  res.status(200).json("creating review");
};
const getAllReviews = async (req, res) => {
  const { id } = req.params;
  const product_reviewed = id;
  const reviews = await Reviews.find({
    product_reviewed: product_reviewed,
  }).populate({ path: "reviewer", select: "name " });
  res.status(StatusCodes.OK).json({ reviews });
};
const getSingleReview = async (req, res) => {
  const { id } = req.params;
  const review = await Reviews.findOne({ _id: id });
  res.status(StatusCodes.OK).json(review);
};

module.exports = {
  getAllReviews,
  getSingleReview,
  deleteReview,
  updateReview,
  createReview,
};
