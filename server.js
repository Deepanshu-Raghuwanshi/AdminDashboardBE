const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 3000;
const userRoute = require("./routes/userRoutes");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoute);

const DBPass = process.env.PASSWORD;
const mongoUri = `mongodb+srv://dipanshuraghuwanshi:${DBPass}@cluster0.luqz6xt.mongodb.net/AdminDash?retryWrites=true&w=majority`;

const databaseConnect = () => {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
databaseConnect()
  .then((data) => {
    console.log("Server started with mongodb atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });

app.get("/", (req, res) => {
  res.send("Hello, World !");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
