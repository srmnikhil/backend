const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create({
      fatherName: req.body.fatherName,
      motherName: req.body.motherName,
      guardianPhone: req.body.guardianPhone,
      guardianEmail: req.body.guardianEmail,
      childName: req.body.childName,
      childAge: req.body.childAge,
      childClass: req.body.childClass,
      appointmentDate: req.body.appointmentDate,
      appointmentTime: req.body.appointmentTime,
      message: req.body.message,
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointment
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find().sort({ createdAt: -1 });
  res.json(appointments);
};
