// GOAL: define a user and a plant model. and I want my user to be able to have many plants, but each plant can only have one user.

const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/plants')

// define models
const User = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  age: Sequelize.INTEGER
})

const Plant = db.define('plant', {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  needsWatering: Sequelize.BOOLEAN
})

// One to many association
User.hasMany(Plant)
Plant.belongsTo(User)

// SEQUELIZE LIFECYCLE: 1) validate, 2) create, 3) destroy
User.beforeCreate((user) => {
  console.log(`About to create the user ${user.name}`)
})

// connect and sync everything to the database
const connect = async () => {
  try {
    await db.sync({force: true}) // connects everything
  console.log('DB has been synced.')

  const johanna = await User.create({
    name: 'Johanna',
    email: 'j@gmail.com',
    address: 'NYC',
    age: 22
  })

  const eugene = await Plant.create({
    name: 'Eugene',
    type: 'pothos',
    needsWatering: true
  })

  // MAGIC METHODS
  await johanna.addPlant(eugene)
  console.log(await johanna.getPlants())

  // Logging magic methods
  console.log(Object.keys(User.prototype))
  }
  catch(error) {
    console.error(error)
  }


}


connect()



// ORDER OF MODEL.JS FILE (User.js, Plant.js)
// 1. Define the model
// 2. Add association
// 3. Add lifecycle methods
// 4. Add class & instance methods
// 5. Export the model




