const express = require("express")
const app = express()
const morgan = require("morgan")

const actorRouter = require("./routes/actorRoutes")
const movieRouter = require("./routes/movieRoutes")
const { Movie } = require('./db')
const { db } = require("./db")
const PORT = 8080

const setup = async () => {
  try {
    app.use(morgan("dev"))
    app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
    app.use("/actors", actorRouter)
    app.use("/movies", movieRouter)

    app.get("/", async (req, res, next) => {
      const movies = await Movie.getEverything()
      res.send(movies)
    })

    app.use((req, res) =>  {
      res.status(404).send('No movies or actors here, check your URL!')
    })

    app.use((err, req, res, next) => {
      console.log('Error in error handling middleware', err);
      const status = err.status || 500;
      res.status(status).send(err.message);
    })

    await db.sync()

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  } catch(error) {
    console.log(error)
  }
}

setup()

