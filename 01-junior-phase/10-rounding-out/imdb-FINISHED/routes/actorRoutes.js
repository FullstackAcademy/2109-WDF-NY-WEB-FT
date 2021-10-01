const express = require("express")
const router = express.Router()
const { Actor } = require("../db")
const addActor = require('../views/addActor')
const actorList = require('../views/actorList')

// GET /actors
router.get("/", async (req, res, next) => {
  try {
    // Can either make Sequelize call here or place in class method
    const actors = await Actor.findAll();
    //res.json(actors);
    res.send(actorList(actors));
  } catch (error) {
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

// GET /actors/actorId
router.get("/:actorId", async (req, res, next) => {
  try {
    const actor = await Actor.findByPk(req.params.actorId)
    const actorAndMovies = await actor.getActorAndMovies()
    res.send(actorAndMovies)
  } catch (error) {
    next(error)
  }
})

router.post("/", async (req, res, next) => {
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
