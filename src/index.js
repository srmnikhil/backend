require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const appointmentRoutes = require("./routes/appointment.routes");
const teacherRoutes = require("./routes/teacher.routes");


const app = express();
const PORT = process.env.PORT || 5000;

/* -------- Middleware -------- */
app.use(cors());
app.use(express.json());

/* -------- MongoDB -------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🟢 MongoDB Connected"))
  .catch((err) => {
    console.error("🔴 Mongo Error:", err.message);
    process.exit(1);
  });

/* -------- Routes -------- */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/teachers", teacherRoutes);



/* -------- Server -------- */
app.listen(PORT, () => {
  console.log(`🟢 Server running on http://localhost:${PORT}`);
});
