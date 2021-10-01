const Sequelize = require('sequelize')

const db = new Sequelize("postgres://localhost:5432/hogwarts", {logging: false})

const Student = db.define("student", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  wand: {
    type: Sequelize.STRING,
    allowNull: true
  },
  pet: {
    type: Sequelize.STRING,
    allowNull: true
  },
  quidditchPlayer: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

const House = db.define("house", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  headOfHouse: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mascot: {
    type: Sequelize.STRING,
    allowNull: false
  },
  founder: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// One to many
Student.belongsTo(House)
House.hasMany(Student)

// ---------------- MANY TO MANY RELATIONSHIPS --------------------
// Because we make a new table, we have to give this "through" table a name
// House.belongsToMany(Student, { through: 'house-student' });
// Student.belongsToMany(House, { through: 'house-student' });

// Check out the different magic methods with many-many!
// console.log(Object.keys(House.prototype));
// console.log(Object.keys(Student.prototype));

// ---------------- CLASS & INSTANCE METHODS --------------------
// Keep in mind - all of our models are just constructor functions.
// This means that we can create class and instance methods on our models.
// console.log(typeof House())

// Class method to get all houses and students
House.getEverything = async function () {
  const houses = await House.findAll({
    include: Student
  });
  return houses;
}

// Instance method (instance methods go on to your prototype)
// Make sure to use function keyword, or else this context will be global by using the arrow function
Student.prototype.getWand = function () {
  return  `${this.name}'s wand is made of ${this.wand}.`;
}

module.exports = {
  Student,
  House,
  db
}


