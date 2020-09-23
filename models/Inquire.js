const mongoose = require("mongoose");
const InquireSchema = mongoose.Schema({
  address: {
    type: String,
    required: [true, "Address Required"],
  },
  city: {
    type: String,
    required: [true, "City Required"],
  },
  county: {
    type: String,
    required: [true, "County Required"],
  },
  name: {
    type: String,
    required: [true, "Name Required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email Required"],
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: [true, "Phone Number Required"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Inquire = mongoose.model("inquire", InquireSchema);

module.exports = Inquire;
