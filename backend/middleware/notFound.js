const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) => {
  res.send("Page not found");

  
};

module.exports = notFound;
