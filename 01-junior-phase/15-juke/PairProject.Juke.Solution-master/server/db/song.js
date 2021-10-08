const Sequelize = require('sequelize')
const db = require('./db')

const Song = db.define('song', {
  name: Sequelize.STRING,
  audioUrl: Sequelize.STRING,
  genre: Sequelize.STRING
})

module.exports = Song
