const Sequelize = require('sequelize')
const db = require('./db')

const Story = db.define('story', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  imageUrl: Sequelize.STRING
})

module.exports = Story
