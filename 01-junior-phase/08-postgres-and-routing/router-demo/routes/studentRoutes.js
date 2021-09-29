const express = require('express')
const router = express.Router()


// if i write './', this assumes that i'm requiring the index.js file in the current directory
// const client = require('./index')
const client = require('../db')

// localhost:1337/
router.get('/', async (req, res, next) => {
  try {
    const data = await client.query(`SELECT * FROM students;`)
    console.log(data.rows)
    res.json(data.rows)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
