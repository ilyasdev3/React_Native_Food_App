require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/DB");
const cors = require("cors");
const router = require("./routes/index.routes");

// allow cors for all routes
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.use("/api", router);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000.");
});
