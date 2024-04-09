const Business = require("../models/Business");
const { StatusCodes } = require("http-status-codes");
const NotFoundError = require("../errors/NotFoundError");
//creating business
const createBusiness = async (req, res) => {
  const { business_Avgrating } = req.body;
  console.log(business_Avgrating);
  //req.body.user = req.user.userId;
  const business = await Business.create(req.body);
  res.status(StatusCodes.CREATED).json({ business });
};
//getting all businesss
const getAllBusiness = async (req, res) => {
  const {
    search,
    filter,
    business_Avgrating,
    business_category,
    sort,
    search1,
  } = req.query;
  console.log(business_Avgrating);
  const queryObj = {};
  //filtering by any properties
  if (business_Avgrating) {
    queryObj.business_Avgrating = business_Avgrating;
  }

  if (business_category) {
    queryObj.business_category = business_category;
  }
  //filtering by group

  if (filter) {
    const filtered = filter.split(",");
    queryObj.business_brand = filtered;
  }

  //searching
  if (search) {
    queryObj.business_name = { $regex: search, $options: "i" };
    queryObj.business_brand = { $regex: search, $options: "i" };
  }
  if (search1) {
    queryObj = {
      $or: [
        { business_name: { $regex: search1, $options: "i" } },
        { business_brand: { $regex: search1, $options: "i" } },
      ],
    };
  }

  let result = Business.find(queryObj);
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

  const totalCount = await Business.countDocuments(queryObj);
  const numOfPages = Math.ceil(totalCount / limit);

  //setting content-range header
  const startRange = skip + 1;
  const endRange = endIndex < totalCount ? endIndex : totalCount;

  res.set("X-Total-Count", totalCount);
  res.set("Content-Range", `${startRange}-${endRange}/${totalCount}`);

  const business = await result;

  res.status(StatusCodes.OK).json({ business, totalCount, numOfPages });
};

const getSinglebusiness = async (req, res) => {
  const { id: businessId } = req.params;

  const business = await Business.findOne({ _id: businessId });

  if (!business) {
    throw new NotFoundError(`No business with id : ${businessId}`);
  }

  res.status(StatusCodes.OK).json({ business });
};
const deletebusiness = async (req, res) => {
  const { id: businessId } = req.params;

  const business = await Business.findOne({ _id: businessId });

  if (!business) {
    throw new NotFoundError(`No business with id : ${businessId}`);
  }

  await business.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! business removed." });
};
const updatebusiness = async (req, res) => {
  const { id: businessId } = req.params;

  const business = await Business.findOneAndUpdate(
    { _id: businessId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!business) {
    throw new NotFoundError(`No business with id : ${businessId}`);
  }

  res.status(StatusCodes.OK).json({ business });
};

module.exports = {
  createBusiness,
  getAllBusiness,
  getSinglebusiness,
  deletebusiness,
  updatebusiness,
};
