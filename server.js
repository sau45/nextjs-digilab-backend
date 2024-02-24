const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./db/createdb");
require("dotenv").config();
var cors = require("cors");
var app = express();

app.use(cors());
const PORT = process.env.PORT || 5050;

const userRoutes = require("./router/userRoute");
const updateRoutes = require("./router/updateroute");
dbConnect();

// Middleware
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/updates", updateRoutes);
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});