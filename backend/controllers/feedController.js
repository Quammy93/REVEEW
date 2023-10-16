const Feed = require("../models/Feed");
const NotFoundError = require("../errors/NotFoundError");
const { StatusCodes } = require("http-status-codes");

const createFeed = async (req, res) => {
  await Feed.create(req.body);

  req.status(StatusCodes.OK).json("feed created successfully");
};

const getSingleFeed = async (req, res) => {
  const { id } = req.params;
  const feed = await Feed.findOne({ _id: id });
  if (!feed) {
    throw new NotFoundError("feed not found");
  }
  req.status(StatusCodes.Ok).json({ feed });
};

const getAllFeeds = async (req, res) => {
  const feeds = await Feed.find({});
  req.status(StatusCodes.OK).json({ feeds });
};
const updateFeed = async (req, res) => {
  const { id } = req.params;
  const feed = await Feed.findByIdAndUpdate({ _id: id }, req.body);

  if (!feed) {
    throw new NotFoundError("feed not found");
  }
  req.status(StatusCodes.OK).json({ feed });
};
const deleteFeed = async (req, res) => {
  const { id } = req.params;
  const feed = await Feed.findByIdAndDelete({ _id: id });

  if (!feed) {
    throw new NotFoundError("feed not found");
  }
  req.status(StatusCodes.OK).json("Feed deleted successfully");
};

module.exports = {
  getAllFeeds,
  getSingleFeed,
  updateFeed,
  createFeed,
  deleteFeed,
};
