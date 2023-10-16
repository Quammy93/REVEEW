const express = require("express");
const router = express();

const {
  createFeed,
  updateFeed,
  getAllFeeds,
  getSingleFeed,
  deleteFeed,
} = require("../controllers/feedController");

router.route("/").post(createFeed).get(getAllFeeds);
router.route("/:id").patch(updateFeed).get(getSingleFeed).delete(deleteFeed);

module.exports = router;
