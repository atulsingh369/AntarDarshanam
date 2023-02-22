const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

// Route Imports
const resource = require("./routes/resourceRoute");
const user = require("./routes/userRoute");


app.use("/api/v1", resource);
app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app

