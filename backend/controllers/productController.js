const Item = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const NotFoundError = require("../errors/NotFoundError");
//creating product
const createItem = async (req, res) => {
  const { avgrating } = req.body;
  console.log(avgrating);
  req.body.user = req.user.userId;
  const item = await Item.create(req.body);
  res.status(StatusCodes.CREATED).json({ item });
};
//getting all products
const getAllProducts = async (req, res) => {
  const { search, filter, avgrating, category, sort, search1 } = req.query;
  console.log(avgrating);
  const queryObj = { type: "product" };
  //filtering by any properties
  if (avgrating) {
    queryObj.avgrating = avgrating;
  }

  if (category) {
    queryObj.category = category;
  }
  //filtering by group

  if (filter) {
    const filtered = filter.split(",");
    queryObj.brand = filtered;
  }

  //searching
  if (search) {
    queryObj.name = { $regex: search, $options: "i" };
    queryObj.brand = { $regex: search, $options: "i" };
  }
  if (search1) {
    queryObj = {
      $or: [
        { name: { $regex: search1, $options: "i" } },
        { brand: { $regex: search1, $options: "i" } },
      ],
    };
  }

  let result = Item.find(queryObj);
  //sorting
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

  const totalCount = await Item.countDocuments(queryObj);
  const numOfPages = Math.ceil(totalCount / limit);

  //setting content-range header
  const startRange = skip + 1;
  const endRange = endIndex < totalCount ? endIndex : totalCount;

  res.set("X-Total-Count", totalCount);
  res.set("Content-Range", `${startRange}-${endRange}/${totalCount}`);

  const items = await result;

  res.status(StatusCodes.CREATED).json({ items, totalCount, numOfPages });
};

const getAllBusiness = async (req, res) => {
  const { search, filter, avgrating, category, sort, search1 } = req.query;
  console.log(avgrating);
  const queryObj = { type: "business" };
  //filtering by any properties
  if (avgrating) {
    queryObj.avgrating = avgrating;
  }

  if (category) {
    queryObj.category = category;
  }
  //filtering by group

  if (filter) {
    const filtered = filter.split(",");
    queryObj.brand = filtered;
  }

  //searching
  if (search) {
    queryObj.name = { $regex: search, $options: "i" };
    queryObj.brand = { $regex: search, $options: "i" };
  }
  if (search1) {
    queryObj = {
      $or: [
        { name: { $regex: search1, $options: "i" } },
        { brand: { $regex: search1, $options: "i" } },
      ],
    };
  }

  let result = Item.find(queryObj);
  //sorting
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

  const totalCount = await Item.countDocuments(queryObj);
  const numOfPages = Math.ceil(totalCount / limit);

  //setting content-range header
  const startRange = skip + 1;
  const endRange = endIndex < totalCount ? endIndex : totalCount;

  res.set("X-Total-Count", totalCount);
  res.set("Content-Range", `${startRange}-${endRange}/${totalCount}`);

  const items = await result;

  res.status(StatusCodes.CREATED).json({ items, totalCount, numOfPages });
};

const getSingleItem = async (req, res) => {
  const { id: itemId } = req.params;

  const item = await Item.findOne({ _id: itemId });

  if (!item) {
    throw new NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json({ item });
};
const deleteItem = async (req, res) => {
  const { id: itemId } = req.params;

  const item = await Item.findOne({ _id: itemId });

  if (!item) {
    throw new NotFoundError(`No product with id : ${itemId}`);
  }

  await item.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};
const updateItem = async (req, res) => {
  const { id: itemId } = req.params;

  const item = await Item.findOneAndUpdate({ _id: itemId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    throw new NotFoundError(`No product with id : ${itemId}`);
  }

  res.status(StatusCodes.OK).json({ item });
};

module.exports = {
  createItem,
  getAllProducts,
  getSingleItem,
  deleteItem,
  updateItem,
  getAllBusiness,
};
