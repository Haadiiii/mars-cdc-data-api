const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  rowId: String,
  uuid: String,
  field1: Number,
  field2: Number,
  jurisdictionCategory: String,
  jurisdictionName: String,
  populationGroup: String,
  vaccinationStatus: String,
  vaccinationConfidenceCategory: String,
  vaccinationConfidenceLevel: String,
  dateRange: String,
  year: String,
  frequency: String,
  percentage: Number,
  percentageRange: String,
  totalCases: Number,
  additionalField1: Number,
  additionalField2: Number,
  additionalField3: Number,
  additionalField4: Number,
  additionalField5: Number,
  additionalField6: Number,
  additionalField7: Number,
  additionalField8: Number,
  additionalField9: Number,
});

const DataModel = mongoose.model("Data", dataSchema);

module.exports = DataModel;
