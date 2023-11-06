const express = require("express");
const router = express();

const {
  createFeed,
  updateFeed,
  getAllFeeds,
  getSingleFeed,
  deleteFeed,
} = require("../controllers/feedController");

const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authentication");

router
  .route("/")
  .post(authenticateUser, authorizeRoles("admin"), createFeed)
  .get(getAllFeeds);
router.route("/:id").patch(updateFeed).get(getSingleFeed).delete(deleteFeed);

module.exports = router;
