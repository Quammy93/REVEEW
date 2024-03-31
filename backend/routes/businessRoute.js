const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authentication");

const {
  createbusiness,
  getAllbusinesss,
  getSinglebusiness,
  updatebusiness,



  deletebusiness,
} = require("../controllers/businessController");

//const { getSinglebusinessReviews } = require("../controllers/reviewController");

router
  .route("/")
  .post([authenticateUser, authorizeRoles("admin")], createbusiness)
  .get(getAllbusinesss);
router
  .route("/:id")
  .get(getSinglebusiness)
  .patch([authenticateUser, authorizeRoles("admin")], updatebusiness)
  .delete([authenticateUser, authorizeRoles("admin")], deletebusiness);

//router.route("/:id/reviews").get(getSinglebusinessReviews);

module.exports = router;
