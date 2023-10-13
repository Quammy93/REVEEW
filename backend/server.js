const express = require("express");
const app = express();
const port = process.env.PORT || 5000; // the app can use either the hosting port during production 0r 5000 is not available
const cors = require("cors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./db/ConnectDb"); 
require("dotenv").config() //   
const AuthRoute = require("./routes/auth");

// middleware



app.use(notFound);
app.use(errorHandler);

const start = async() => {
await connectDb(process.env.MONGO_URL);         
    app.listen(port, () => console.log(`Server is running on port ${port}`));
};


//routes
app.use('/api', AuthRoute)
app.use('/api', AuthRoute)

start()
