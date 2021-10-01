const { CHAR_FORM_FEED } = require('picomatch/lib/constants');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const db = new Sequelize("postgres://localhost:5432/imdb", {logging: false})

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
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
    validate: {
      max: 2021
    }
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

Movie.getEverything = async function () {
  const movies = await Movie.findAll({
    include: Actor
  });
  return movies;
}

Movie.get2000sMovies = async function () {
  const movies = await Movie.findAll({
    where: {
      releaseYear: {
        [Op.between]: [2000, 2010]
      }
    }
  })
  return movies;
}

Actor.beforeCreate((actorInstance) => {
  console.log(actorInstance)
  if (actorInstance.deathYear) {
    actorInstance.name = actorInstance.name.concat(' (deceased)')
  }
})
Actor.prototype.getActorAndMovies = async function () {
  const actor = await Actor.findAll({
    where: {
      name: this.name
    },
    include: Movie

  })
  return actor
}

module.exports = {
  Movie,
  Actor,
  db
}
