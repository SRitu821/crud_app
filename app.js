require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRouter = require("./routes/book_api");

app.use(express.json());
app.use("/", bookRouter);

mongoose.connect(process.env.MONGODB_URI, { dbName: "crud" })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});