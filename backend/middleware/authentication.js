const { isTokenValid } = require("../JWT/jwtUtils");
const UnAunthenticatedError = require("../errors/UnAunthenticatedError");
const UnauthorizedError = require("../errors/UnauthorizedError");

const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  
  console.log(token);

  if (!token) {
    throw new UnAunthenticatedError("No token found");
  }
//attaching user to request
  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new UnAunthenticatedError("Authentication Invalid");
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizeRoles,
};
