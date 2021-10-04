const server = require('./server');
const {db} = require('./server/db');
const PORT = 3000;

const init = async () => {
  try {
    await db.sync();
    console.log('The DB is synced!');

    server.listen(PORT, () => console.log(
      `
      Listening on port ${PORT}!
      http://localhost:${PORT}
      `
    ))
  } catch (error) {
    console.error('There was an error starting up!', error);
  }
}

init();
