const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/first-contact', {
  logging: false,
});

const Contact = db.define('contacts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
  favorite: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
});

module.exports = {
  db,
  Contact,
};
