const axios = require("axios");
const DataModel = require("./models/DataModel"); // Create this model

// Define a function to fetch and store CDC data
const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://data.cdc.gov/api/views/qz99-wyhv/rows.json?accessType=DOWNLOAD"
    );

    const data = response.data;
    console.log("Data", data);

    // Validate that required fields are present before insertion
    // Store data in MongoDB (using DataModel)
    await DataModel.create(data);
    console.log("Data ingestion completed.");
  } catch (error) {
    console.error("Error during data ingestion:", error);
  }
};

// Schedule data ingestion (e.g., using cron)

module.exports = fetchData;
