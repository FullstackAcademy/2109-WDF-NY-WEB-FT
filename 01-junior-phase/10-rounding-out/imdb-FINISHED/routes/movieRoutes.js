const express = require("express")
const router = express.Router()
const { Movie } = require("../db")
const addMovie = require('../views/addMovie')
const movieList = require('../views/movieList')


// GET /movies
router.get("/", async (req, res, next) => {
  try {
    // Can either make Sequelize call here or place in class method
    const movies = await Movie.getEverything();
    res.send(movieList(movies));
  } catch (error) {
    next(error)
  }
})

// GET /movies/add
router.get("/add", async (req, res, next) => {
  try {
    res.send(addMovie)
  } catch(error) {
    next(error)
  }
})

// GET /movies/2000s
router.get("/2000s", async (req, res, next) => {
  try {
    const movies = await Movie.get2000sMovies();
    console.log(movies)
    res.send(movieList(movies));
  } catch(error) {
    next(error)
  }
})

// GET /movies/movieId
router.get("/:movieId", async (req, res, next) => {
  try {
    const movie = await Movie.findByPk(req.params.movieId)
    res.json(movie)
  } catch (error) {
    next(error)
  }
})

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body)
    const movie = await Movie.create({
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating
    })
    res.redirect("/movies")
  } catch(error) {
    next(error)
  }
})

module.exports = router;
