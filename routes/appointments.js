const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createAppointment,
  getAppointment,
  updateAppointment,
  deleteAppointment
} = require("../handlers/appointments");

router.route("/").post(createAppointment);
router
  .route("/:appointment_id")
  .get(getAppointment)
  .put(updateAppointment)
  .delete(deleteAppointment)

module.exports = router;