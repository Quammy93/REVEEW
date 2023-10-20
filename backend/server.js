const express = require("express");
const app = express();
const port = process.env.PORT || 5000; // the app can use either the hosting port during production 0r 5000 is not available
const cors = require("cors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");
const cookieParser = require("cookie-parser");
require("express-async-errors");

const connectDb = require("./db/ConnectDb");
require("dotenv").config(); //

const corsOptions = {
  origin: "http://127.0.0.1:5173", // Replace with the actual origin of your frontend application
  credentials: true,
};

const AuthRoute = require("./routes/auth");
const reviewRoute = require("./routes/reviewRoute");
const feedRoutes = require("./routes/feedRoute");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");

const Feed = require("./models/Feed");
// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static(path.resolve(__dirname, "../client/dist")));

//routes
app.use("/api", AuthRoute);
app.use("/api/reviews", reviewRoute);
//app.use('/api', AuthRoute)
app.use("/api/feeds", feedRoutes);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  await connectDb(process.env.MONGO_URL);

  app.listen(port, () => console.log(`Server is running on port ${port}`));
};

start();
