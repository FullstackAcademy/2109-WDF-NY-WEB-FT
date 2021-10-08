const Sequelize = require('sequelize')
const db = require('./db')

const Artist = db.define('artist', {
  name: Sequelize.STRING
})

module.exports = Artist
