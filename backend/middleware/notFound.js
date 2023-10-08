const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) => {
  res.send("Page not found");

  //    res.status(StatusCodes.NOT_FOUND).json("Page not found")
};

module.exports = notFound;
