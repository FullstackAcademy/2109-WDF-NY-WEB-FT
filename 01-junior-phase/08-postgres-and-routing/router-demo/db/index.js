const pg = require('pg')
const postgresUrl = 'postgres://localhost/hogwarts'

const client = new pg.Client(postgresUrl)

const connector = async () => {
  try {
    await client.connect()
  } catch (error) {
    console.log('An error occurred: ', error)
    await client.end()
  }
}

connector()

module.exports = client;
