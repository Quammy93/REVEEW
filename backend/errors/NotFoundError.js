const CustomError = require("../errors/CustomError");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
