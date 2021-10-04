const config = require('../../config');
const Sequelize = require('sequelize');

module.exports = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
