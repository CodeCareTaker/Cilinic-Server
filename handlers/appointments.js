const db = require("../models");

exports.createAppointment = async function(req, res, next) {
  try {
 	let appointment = await db.Appoint.create({
 	  name: req.body.name,
 	  phoneNumber: req.body.phonenumber,
 	  email: req.body.email,
 	  date: req.body.email,
 	  message: req.body.message
 	})
 	return res.status(200).json(appointment);
  } catch(err) {
 	return next(err);
  }
};

exports.getAppointment = async function(req, res, next) {
  try {
  	let appointment = await db.Appointment.findById(req.params.appointment_id);
  	return res.status(200).json(appointment);
  } catch(err) {
  	return next(err);
  }
};

exports.updateAppointment = async function(req, res, next) {
  try {
  	let foundAppointment await db.Appointment.findByIdAndUpdate(req.params.appointment_id);
  	return res.status(200).json(foundAppointment);
  } catch(err) {
  	return next(err);
  }
};

exports.deleteAppointment = async function(req, res, next) {
  try {
  	let foundAppointment = await db.Appointment.findByIdAndDelete(req.params.appointment_id);
  	return res.status(200).json(foundAppointment);
  } catch(err) {}
};