const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authentication");


const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

router.route("/").get(getAllUsers);
router.route("/showuser").get(authenticateUser,showCurrentUser);
router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
