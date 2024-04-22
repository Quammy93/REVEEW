const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authentication");

const {
  createItem,
  getAllProducts,
  getSingleItem,
  updateItem,
  deleteItem,
  getAllBusiness,
} = require("../controllers/productController");

//const { getSingleProductReviews } = require("../controllers/reviewController");

router
  .route("/products")
  .post([authenticateUser, authorizeRoles("admin")], createItem)
  .get(getAllProducts);
router
  .route("/services")
  .post([authenticateUser, authorizeRoles("admin")], createItem)
  .get(getAllBusiness);
router
  .route("/item/:id")
  .get(getSingleItem)
  .patch([authenticateUser, authorizeRoles("admin")], updateItem)
  .delete([authenticateUser, authorizeRoles("admin")], deleteItem);

//router.route("/:id/reviews").get(getSingleProductReviews);

module.exports = router;
