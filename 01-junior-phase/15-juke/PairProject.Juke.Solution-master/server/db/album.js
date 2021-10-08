const Sequelize = require('sequelize')
const db = require('./db')

const Album = db.define('album', {
  name: Sequelize.STRING,
  artworkUrl: Sequelize.STRING
})

module.exports = Album
