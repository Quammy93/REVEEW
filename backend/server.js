const express = require("express");
const app = express();
const port = process.env.PORT || 5000; // the app can use either the hosting port during production 0r 5000 is not available
const cors = require("cors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");
const cookieParser = require("cookie-parser");
require("express-async-errors");

const businesjson = require("./businessList");
const Item = require("./models/Product");

const connectDb = require("./db/ConnectDb");
require("dotenv").config(); //

const corsOptions = {
  origin: "http://127.0.0.1:5173", // Replace with the actual origin of your frontend application
  credentials: true,
};

const AuthRoute = require("./routes/auth");
const reviewRoute = require("./routes/reviewRoute");

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//app.use(express.static("../client/dist"));
app.use(express.static(path.resolve(__dirname, "../client/dist")));

//routes
app.use("/api", AuthRoute);
app.use("/api/reviews", reviewRoute);
//app.use('/api', AuthRoute)

app.use("/api/users", userRoute);
app.use("/api", productRoute);

app.get("/doc");

app.get("/doc", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./doc", "reveew.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

//app.use(notFound);
app.use(errorHandler);

const start = async () => {
  await connectDb(process.env.MONGO_URL);

  await app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
  );

 // await Item.create(businesjson);
};

start();
