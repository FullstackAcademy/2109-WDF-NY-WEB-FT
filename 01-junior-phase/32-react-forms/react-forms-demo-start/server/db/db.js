const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/react_forms');

module.exports = db;
