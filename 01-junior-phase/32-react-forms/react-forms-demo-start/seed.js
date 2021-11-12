

const { db, Cat } = require('./server/db');
const seed = async () => {
  await db.sync({ force: true });
  db.close();
  console.log('Seeding successful!');
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
