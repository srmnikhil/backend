const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    guardianPhone: { type: String, required: true },
    guardianEmail: { type: String, required: true },

    childName: { type: String, required: true },
    childAge: { type: Number, required: true },
    childClass: { type: String, required: true },

    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },

    message: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
