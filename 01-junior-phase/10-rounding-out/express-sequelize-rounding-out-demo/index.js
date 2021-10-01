const express = require("express")
const app = express()
const morgan = require("morgan")
const studentRouter = require("./routes/studentRoutes")
const houseRouter = require("./routes/houseRoutes")
const { db } = require("./db")
const PORT = 8080

const setup = async () => {
  try {
    // logging middleware
    app.use(morgan("dev"))

    // route files
    app.use("/students", studentRouter)
    app.use("/houses", houseRouter)

    // ---------------- CUSTOM 404 RESPONSE --------------------
    // The final middleware function, so that any url that does not get hit will land here
    // There is no error that happened here, the route was just not found and we provide a custom response.
    app.use((req, res) =>  {
      res.status(404).send('There is no magic to be found here, check your URL!')
    })

    // ---------------- CUSTOM ERROR HANDLER --------------------
    // Error handling middleware: (err, req, res, next => {})
    // vs Regular middleware: (req, res, next) => {}
    app.use((err, req, res, next) => {
      console.log('Error in error handling middleware', err);
      // err.message is whatever message you specify in the error constructor function
      // err.status can be used if set in error constructor function
      const status = err.status || 500;
      res.status(status).send(err.message);
    })

    // syncing database
    await db.sync()

    // listening to the port
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

setup();
