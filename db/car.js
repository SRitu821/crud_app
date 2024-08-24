const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  carname: String,
  model: String,
  summary: String,
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;


