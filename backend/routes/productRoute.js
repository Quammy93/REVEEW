const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authentication");

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//const { getSingleProductReviews } = require("../controllers/reviewController");

router
  .route("/")
  .post([authenticateUser, authorizeRoles("admin")], createProduct)
  .get(getAllProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizeRoles("admin")], updateProduct)
  .delete([authenticateUser, authorizeRoles("admin")], deleteProduct);

//router.route("/:id/reviews").get(getSingleProductReviews);

module.exports = router;
