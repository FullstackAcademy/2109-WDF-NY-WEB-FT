const pg = require('pg')

const postgresUrl = 'postgres://localhost/hogwarts'

const client = new pg.Client(postgresUrl)

const connector = async () => {
  try {
    await client.connect()
    console.log("Successfully connected!")
    const data = await client.query(`SELECT * FROM students;`)
    console.log(data.rows)
  } catch (error) {
    console.log(error)
    await client.end()
  }
}

connector()
