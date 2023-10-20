const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

router.route("/").get(getAllUsers);
router.route("/showuser").get(showCurrentUser);
router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
