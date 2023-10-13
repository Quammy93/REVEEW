const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const AuthRoute = require('./routes/auth');

// Middleware
app.use(cors());
app.use(express.json());

// Register and Login Routes
app.use('/api', AuthRoute);
//app.use('/api', AuthRoute.login);

const start = () => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
}

start();
