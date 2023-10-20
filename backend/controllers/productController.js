const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const { product_Avgrating } = req.body;
  console.log(product_Avgrating);
  req.body.user = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};
const getAllProducts = async (req, res) => {
  const { search, filter, product_Avgrating, product_category, sort } =
    req.query;
  console.log(product_Avgrating);
  const queryObj = {};
  //filtering by any properties
  if (product_Avgrating) {
    queryObj.product_Avgrating = product_Avgrating;
  }

  if (product_category) {
    queryObj.product_category = product_category;
  }
  //filtering by group

  if (filter) {
    const filtered = filter.split(",");
    queryObj.product_brand = filtered;
  }

  //searching
  if (search) {
    queryObj.product_name = { $regex: search, $options: "i" };
  }

  let result = Product.find(queryObj);

  if (sort === "a-z") {
    result = result.sort("price");
  }
  if (sort === "z-a") {
    result = result.sort("-price");
  }

  //pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const endIndex = page * limit;

  result = result.skip(skip).limit(limit);

  const totalCount = await Product.countDocuments(queryObj);
  const numOfPages = Math.ceil(totalCount / limit);

  //setting content-range header
  const startRange = skip + 1;
  const endRange = endIndex < totalCount ? endIndex : totalCount;

  res.set("X-Total-Count", totalCount);
  res.set("Content-Range", `${startRange}-${endRange}/${totalCount}`);

  const products = await result;

  res.status(StatusCodes.CREATED).json({ products, totalCount, numOfPages });
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};
const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  await product.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};
const updateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
