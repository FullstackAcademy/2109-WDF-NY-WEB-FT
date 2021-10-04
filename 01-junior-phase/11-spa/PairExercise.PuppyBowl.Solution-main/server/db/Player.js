const Sequelize = require('sequelize');
const db = require('./database');

const Player = db.define('player', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('field', 'bench'),
    defaultValue: 'bench'
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
});

module.exports = Player;
