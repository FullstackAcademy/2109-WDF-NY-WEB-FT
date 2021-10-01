const express = require("express");
const router = express.Router();
const { Student, House } = require("../db");

// GET /students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll()
    res.json(students)
  }
  catch (error) {
    next(error)
  }
})

// GET /students/studentId
router.get("/:studentId", async (req, res, next) => {
  try {
    // If I want to also get the student's associated house, we could use the below lines, but this is making 2 database calls.
    // const student = await Student.findByPk(req.params.studentId)
    //const studentsHouse = await student.getHouse();

    // Eager loading will allow us to get info via associations.
    // 1st arg = pk, second is an include key plus the model to include
    const student = await Student.findByPk(req.params.studentId, {
      include: House
    })

    res.json(student)
    // Example of using student instance method
    //res.send(student.getWand())
  }
  catch (error) {
    next(error)
  }
})

module.exports = router;
