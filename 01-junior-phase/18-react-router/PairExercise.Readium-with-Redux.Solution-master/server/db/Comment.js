const Sequelize = require('sequelize')
const db = require('./db')

const Comment = db.define('comment', {
  content: Sequelize.TEXT
})

module.exports = Comment
