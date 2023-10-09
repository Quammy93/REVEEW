const express = require("express");
const app = express();
const port = process.env.PORT || 5000; // the app can use either the hosting port during production 0r 5000 is not available
//const cors = require("cors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const AuthRoute = require("./routes/auth");

// middleware

//routes
app.use("/api", AuthController.register);
app.use("/api", AuthController.login);

app.use(notFound);
app.use(errorHandler);

const start = () => {
  app.listen(port, () => console.log(`Server is running on port ${port}`));
};



app.use('/api', AuthRoute)
//app.use('/api', AuthController.login)

start()
