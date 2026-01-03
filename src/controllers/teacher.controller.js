const Teacher = require("../models/Teacher");

// Add a new teacher
exports.addTeacher = async (req, res) => {
  try {
    const { name, mobile, subject } = req.body;

    const teacher = await Teacher.create({
      name,
      mobile,
      subject,
    });

    res.status(201).json({
      success: true,
      message: "Teacher added successfully",
      teacher,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// Get all teachers
exports.getTeachers = async (req, res) => {
  const teachers = await Teacher.find().sort({ createdAt: -1 });
  res.json(teachers);
};
