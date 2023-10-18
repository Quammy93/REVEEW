const UnAuthenticatedError=require("../errors/UnAunthenticatedError")
const UnauthorizedError = require("../errors/UnauthorizedError");
const { isTokenValid } = require("../JWT/jwtUtils");

const authenticateUser = (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new UnAuthenticatedError("Invalid credentials");
  }
  //veryfing the token

  try {
    const tokenOwner = isTokenValid({ token });
    const { role, name, userId } = tokenOwner;

    //attaching the user  to request body
    req.user = { name, userId, role };

    next();
  } catch (error) {
    throw new UnAuthenticatedError("Invalid credentials");
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("You are not authorized,Acess denied!! ");
    }
    next();
  };
};

module.exports = { authenticateUser, authorizeRoles };
