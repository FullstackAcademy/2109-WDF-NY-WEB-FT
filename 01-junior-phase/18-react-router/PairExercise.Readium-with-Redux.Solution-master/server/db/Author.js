const Sequelize = require('sequelize')
const db = require('./db')

const Author = db.define('author', {
  name: Sequelize.STRING,
  bio: Sequelize.TEXT,
  imageUrl: Sequelize.STRING
})

module.exports = Author
