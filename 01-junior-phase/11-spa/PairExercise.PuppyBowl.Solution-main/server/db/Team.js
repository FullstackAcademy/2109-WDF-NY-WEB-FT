const Sequelize = require('sequelize');
const db = require('./database');

const Team = db.define('team', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = Team;
