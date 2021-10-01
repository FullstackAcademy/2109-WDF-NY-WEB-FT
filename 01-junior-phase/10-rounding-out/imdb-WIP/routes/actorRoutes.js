const express = require("express")
const { networkInterfaces } = require("os")
const router = express.Router()
const { Actor } = require("../models")
const addActor = require("../views/addActor")

// GET /actors
router.get("/", async (req, res, next) => {
  try {
    const actors = await Actor.findAll();
    res.json(actors)
  } catch(error) {
    next(error)
  }
})
// GET /actors/add
router.get("/add", async (req, res, next) => {
  try {
    res.send(addActor)
  } catch(error) {
    next(error)
  }
})
// GET /actors/:id
// POST /actors
router.post("/", async(req, res, next) => {
  try {
    console.log(req.body)
    const actor = await Actor.create({
      name: req.body.name,
      birthYear: req.body.birthYear,
      deathYear: req.body.deathYear || null
    })
    res.redirect("/actors")
  } catch(error) {
    next(error)
  }
})

module.exports = router;

