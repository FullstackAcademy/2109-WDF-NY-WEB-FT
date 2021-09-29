const express = require('express')
const app = express()
const morgan = require('morgan')

const studentRoutes = require('./routes/studentRoutes')

app.use('/students', studentRoutes)
//app.use('/professors', professorRoutes)
app.use(morgan('dev'))

app.listen(1370, () => console.log("Express app listening on port 1370"))
