const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRouter = require("./routes/book_api");
const carRouter = require("./routes/car_api");


app.use("/", bookRouter);
app.use("/", carRouter);


//connect to mongoose
// mongoose.connect(process.env.MONGODB, {
//   dbName: "Backend",
// });
mongoose.connect('mongodb://localhost:27017/crud')
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});