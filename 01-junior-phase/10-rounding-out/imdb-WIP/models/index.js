const Sequelize = require('sequelize')

const db = new Sequelize("postgres://localhost:5432/imdb")

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: Sequelize.INTEGER,
    validate: {
      max: 2022
    }
  },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: false,
  }
})

const Actor = db.define("actor", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birthYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  deathYear: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      max: 2021
    }
  }
})

Actor.belongsToMany(Movie, { through: 'actor-movie'})
Movie.belongsToMany(Actor, { through: 'actor-movie'})

module.exports = {
  Movie,
  Actor,
  db
}



