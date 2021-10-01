const express = require("express");
const router = express.Router();
const { House, Student } = require("../db");

// How can we keep the Sequelize logic out of routes, and handle it in our db file when possible? Class and instance methods.

// GET /houses
router.get("/", async (req, res, next) => {
  try {
    // Including students through eager loading. Retrieved students will be an array, because of the hasMany relationship.
    // Method #1: without class method
    // const houses = await House.findAll({
    //   include: Student
    // })
    //
    // Method #2: with class method
    const houses = await House.getEverything();
    res.json(houses)
  }
  catch (error) {
    next(error)
  }
})

// If I don't have a house associated with my table, I am sending back a 200 - which we don't want!
// GET /houses/houseId
router.get("/:houseId", async (req, res, next) => {
  try {
    const house = await House.findByPk(req.params.houseId)
    // Error happens on line 24, but the error is caught in the catch block
    if (house === null) {
      // Method 1: simple error throw
      // throw new Error(`There is no house associated with id ${req.params.houseId}!`)
      // Method 2: throw error with status
      const error = new Error(`NO HOUSE ASSOCIATED WITH ${req.params.houseId}!`)
      error.status = 404;
      throw error;
    }
    else {
      res.json(house)
    }
  } catch (error) {
    next(error)
    // When we call next here, it moves to the next error handling middleware. we don't have any custom error handling middleware here, so it would be sent to express's default error handling middleware - printing the stack trace.

    /*
    There are two options with next:
    1. next(): If there are no args, I am going to look for the next route that matches my verb and URL.
    2. next(error): If one arg is provided, I will look for the next error handling middleware.
    */

    // Unless...we define custom middleware in index.js.
  }
})

module.exports = router;
