const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
  	timestamps: true
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;