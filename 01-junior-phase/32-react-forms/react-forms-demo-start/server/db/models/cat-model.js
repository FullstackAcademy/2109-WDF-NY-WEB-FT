const Sequelize = require('sequelize');
const db = require('../db');

const Cat = db.define('user', {
  catName: Sequelize.STRING,
  ownerName: Sequelize.STRING,
  imgUrl: Sequelize.STRING,
});

module.exports = Cat;
