const CustomError = require("./CustomError");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.FORBIDDEN;
  }
}

module.exports = UnauthorizedError;
