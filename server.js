const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const dotenv = require("dotenv");
const DataModel = require("./models/DataModel");
const fetchData = require("./dataIngestion");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (ensure you have MongoDB installed and running)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

// if mongoose is connected
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

// use routes ./all and ./filter
app.get("/all", async (req, res) => {
  try {
    const data = await DataModel.find({});
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/filter", async (req, res) => {
  const { criteria } = req.query; // Adjust this based on your filtering needs
  try {
    const filteredData = await DataModel.find({ criteria });
    res.json(filteredData);
  } catch (error) {
    console.error("Error filtering data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  fetchData();

  if (fetchData) {
    console.log("Data ingestion completed.");
  } else {
    console.log("Error during data ingestion:", error);
  }
});
