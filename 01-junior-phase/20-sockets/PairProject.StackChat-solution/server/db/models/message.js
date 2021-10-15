const Sequelize = require('sequelize');
const db = require('../db');
const Author = require('./author');

module.exports = db.define('message', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  defaultScope: {
    include: [
      { model: Author }
    ]
  }
});
