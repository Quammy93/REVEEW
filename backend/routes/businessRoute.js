const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authentication");

const {
  createBusiness,
  getAllBusiness,
  getSinglebusiness,
  updatebusiness,

  deletebusiness,
} = require("../controllers/businessController");

//const { getSinglebusinessReviews } = require("../controllers/reviewController");

router
  .route("/")
  .post([authenticateUser, authorizeRoles("admin")], createBusiness)
  .get(getAllBusiness);
router
  .route("/:id")
  .get(getSinglebusiness)
  .patch([authenticateUser, authorizeRoles("admin")], updatebusiness)
  .delete([authenticateUser, authorizeRoles("admin")], deletebusiness);

//router.route("/:id/reviews").get(getSinglebusinessReviews);

module.exports = router;
