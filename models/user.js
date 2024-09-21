const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },

  date: { type: Date, default: Date.now },
});
const userModel = mongoose.model("user", usersSchema);
module.exports = userModel;
