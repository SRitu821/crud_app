const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String,
  numberofpages: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;