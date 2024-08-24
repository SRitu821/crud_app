
const express = require("express");
const Car = require("../db/car");
// const { db } = require("mongoose");
const router = express.Router();

//Add a new car route
router.post("/newcar", async (req, res) => {
  const { carname, model, summary } = req.body;

  try {
    if (!carname || !model || !summary) {
      return res.status(400).json({ message: "Incomplete car data" });
    }

    const car = new Car({ carname, model, summary });
    const savedCar = await car.save();
    res.status(201).json({
      message: "New car added successfully",
      car: savedCar,
      carid: savedCar._id,
    });
  } catch (err) {
    res.status(500).json({ message: "Car not added", error: err });
  }
});

//Update car
router.put("/car/:carId", async (req, res) => {
  const carId = req.params.carId;
  const updatedData = req.body;

  // Check for missing or invalid fields in the updated data
  if (!updatedData.carname || !updatedData.model || !updatedData.summary) {
    return res.status(400).json({
      message:
        "Invalid or missing data. Please provide carname, model, and summary.",
    });
  }

  const updatedCar = await Car.findByIdAndUpdate(carId, updatedData, {
    new: true,
  });

  if (!updatedCar) {
    return res.status(404).json({ message: "Car not found" });
  }

  res.json({ message: "Car updated successfully", updatedCar });
});

//delete car
router.delete("/deletecar/:carId", async (req, res) => {
  const carId = req.params.carId;

  try {
    const deletedCar = await Car.findByIdAndDelete(carId);

    if (!deletedCar) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json({ message: "Car deleted successfully" });
  } catch (err) {
    console.error("Error deleting Car:", err);
    res
      .status(500)
      .json({ message: "Error deleting Car", error: err.message });
  }
});

//get cars
router.get("/cars", async (req, res) => {
  const books = await Car.find({});
  res.json({ cars });
});

//get specific car
router.get("/car/:carId", async (req, res) => {
  const carId = req.params.carId;
  const car = await Car.findById(carId);
  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }
  res.json({ car });
});

module.exports = router;