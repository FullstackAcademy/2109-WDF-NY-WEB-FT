// all middleware will be here!!
// and also calling route files
const express = require("express")
const app = express()
const morgan = require("morgan")

const setup = async () => {
  app.use(morgan("dev")) // logging middleware
  app.use(express.urlencoded({ extended: false})) // body parsing middleware
  app.use("/actors", require("./routes/actorRoutes"))
  //app.use("/movies", require("./routes/movieRoutes"))

  app.listen(8081, () => {
    `Listening on port 8081`
  })
}

setup()
