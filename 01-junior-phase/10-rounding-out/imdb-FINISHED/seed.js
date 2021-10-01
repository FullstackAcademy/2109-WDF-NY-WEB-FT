const { Actor, Movie, db } = require("./db")

const connector = async () => {
  await db.sync({
    force: true
  })
  console.log("Database has been synced.")

  // Create movies
  const shawshank = await Movie.create({
    title: 'The Shawshank Redemption',
    releaseYear: 1994,
    rating: 9.2
  })

  const godfather = await Movie.create({
    title: 'The Godfather',
    releaseYear: 1972,
    rating: 9.1
  })

  const darkKnight = await Movie.create({
    title: 'The Dark Knight',
    releaseYear: 2008,
    rating: 9.0
  })

  const angryMen = await Movie.create({
    title: '12 Angry Men',
    releaseYear: 1957,
    rating: 9.0
  })

  const schindlersList = await Movie.create({
    title: 'Schindlers List',
    releaseYear: 1993,
    rating: 8.9
  })

  const brokeback = await Movie.create({
    title: 'Brokeback Mountain',
    releaseYear: 2005,
    rating: 7.7
  })

  const morgan = await Actor.create({
    name: 'Morgan Freeman',
    birthYear: 1937
  })

  const al = await Actor.create({
    name: 'Al Pacino',
    birthYear: 1940
  })

  const heath = await Actor.create({
    name: 'Heath Ledger',
    birthYear: 1979,
    deathYear: 2008
  })

  const salma = await Actor.create({
    name: 'Salma Hayek',
    birthYear: 1966
  })

  const emma = await Actor.create({
    name: 'Emma Watson',
    birthYear: 1990
  })

  //console.log(Object.keys(Actor.prototype))
  morgan.addMovie(shawshank)
  al.addMovie(godfather)
  heath.addMovie(darkKnight)
  heath.addMovie(brokeback)

}

connector()
