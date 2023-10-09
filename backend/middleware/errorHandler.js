const CustomError = require("../errors/CustomError");
const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR;
  console.log(err);

  if (err instanceof CustomError) {
    return res.status(statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "something went wrong....Try again later" });
};

module.exports = errorHandler;
