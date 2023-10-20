const UnAuthenticatedError = require("../errors/UnAunthenticatedError");
const UnauthorizedError = require("../errors/UnauthorizedError");
const { isTokenValid } = require("../JWT/jwtUtils");

const authenticateUser = async (req, res, next) => {
  let token;
  // checking  header only if the frontend atached the token to header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }
  if (!token) {
    throw new UnAuthenticatedError("No  token");
  }
  try {
    console.log(token);
    const payload = await jwt.verify(token, process.env.JWT_SECRET); //isTokenValid(token);

    // Attach the user and his permissions to the req object
    req.user = {
      userId: payload.user.userId,
      role: payload.user.role,
    };

    next();
  } catch (error) {
    throw new UnauthorizedError("Authentication invalid");
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
/**
 * 

const token = req.signedCookies.token;

  if (!token) {
    throw new UnAuthenticatedError("No credentials");
  }
  //veryfing the token

  try {
    const tokenOwner = isTokenValid({ token });
    const { role, name, userId } = tokenOwner;

    //attaching the user  to request body
    req.user = { name, userId, role };
    console.log(req.user);

    next();
  } catch (error) {
    throw new UnAuthenticatedError("Invalid credentials");
  }


 */
