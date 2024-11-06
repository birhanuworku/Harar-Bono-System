// src/app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const bonoRoutes = require("./routes/bonoRoutes");
app.use("/api/bono", bonoRoutes);

module.exports = app;
