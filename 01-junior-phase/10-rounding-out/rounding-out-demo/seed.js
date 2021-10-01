const { Student, House, db } = require("./db")

const connector = async () => {
  // Sync database, and force true so that we first drop the tables then recreate them
  await db.sync({
    force: true
  })
  console.log("Database has been synced.")

  // Create students
  const harry = await Student.create({
    name: 'Harry Potter',
    wand: 'Holly and phoenix feather',
    pet: 'Hedwig',
    quidditchPlayer: true
  })

  const ron = await Student.create({
    name: 'Ronald Weasley',
    wand: 'Willow wood wand and unicorn hair',
    pet: 'Scabbers',
    quidditchPlayer: true
  })

  const hermione = await Student.create({
    name: 'Hermione Granger',
    wand: 'vine wood and dragon heartstring',
    pet: 'Crookshanks',
    quidditchPlayer: false
  })

  const draco = await Student.create({
    name: 'Draco Malfoy',
    wand: 'hawthorn wood and unicorn hair',
    quidditchPlayer: true
  })

  const luna = await Student.create({
    name: 'Luna Lovegood',
    pet: 'Nargle',
    quidditchPlayer: false
  })

  const cedric = await Student.create({
    name: 'Cedric Diggory',
    quidditchPlayer: true
  })

  // Create houses
  const gryffindor = await House.create({
    name: 'Gryffindor',
    headOfHouse: 'Minerva McGonagall',
    mascot: 'Lion',
    founder: 'Godric Gryffindor'
  })

  const slytherin = await House.create({
    name: 'Slytherin',
    headOfHouse: 'Severus Snape',
    mascot: 'Snake',
    founder: 'Salazar Slytherin'
  })

  const ravenclaw = await House.create({
    name: 'Ravenclaw',
    headOfHouse: 'Filius Flitwick',
    mascot: 'Eagle',
    founder: 'Rowena Ravenclaw'
  })

  const hufflepuff = await House.create({
    name: 'Hufflepuff',
    headOfHouse: 'Pomona Sprout',
    mascot: 'Badger',
    founder: 'Helga Hufflepuff'
  })

  harry.setHouse(gryffindor)
  ron.setHouse(gryffindor)
  hermione.setHouse(gryffindor)
  draco.setHouse(slytherin)
  luna.setHouse(ravenclaw)
  cedric.setHouse(hufflepuff)
}

connector()
