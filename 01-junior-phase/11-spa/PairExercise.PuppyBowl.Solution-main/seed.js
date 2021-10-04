const {db, Player, Team} = require('./server/db');

const seed = async () => {
  const teams = ['Ruff', 'Fluff'];
  const players = [{
    name: 'Anise',
    breed: 'Australian Cattle Dog / Labrador Retriever',
    status: 'field',
    imageUrl: 'http://r.ddmcdn.com/w_912/s_f/o_1/cx_51/cy_0/cw_912/ch_1368/APL/uploads/2019/12/Anise-PBXVI.jpg',
    teamId: 1
  }, {
    name: 'Bert',
    breed: 'Great Pyrenees / Weimaraner',
    status: 'field',
    imageUrl: 'http://r.ddmcdn.com/w_1010/s_f/o_1/cx_0/cy_4/cw_1010/ch_1515/APL/uploads/2019/12/Bert-PBXVI.jpg',
    teamId: 1
  }, {
    name: 'Crumpet',
    breed: 'American Staffordshire Terrier',
    status: 'field',
    imageUrl: 'http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg',
    teamId: 1
  }, {
    name: 'Daphne',
    breed: 'German Shepherd',
    status: 'field',
    imageUrl: 'http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg',
    teamId: 2
  }, {
    name: 'Duncan',
    breed: 'Collie',
    status: 'field',
    imageUrl: 'http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_49/cw_1012/ch_1518/APL/uploads/2020/01/Duncan-PBXVI-v2.jpg',
    teamId: 2
  }, {
    name: 'Filbert',
    breed: 'Shetland Sheepdog / Border Collie',
    status: 'field',
    imageUrl: 'http://r.ddmcdn.com/w_942/s_f/o_1/cx_35/cy_0/cw_942/ch_1413/APL/uploads/2019/12/Filbert-PBXVI.jpg',
    teamId: 2
  }, {
    name: 'Gina',
    breed: 'Labrador Retriever / Chow Chow',
    status: 'bench',
    imageUrl: 'http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Gina-PBXVI.jpg',
    teamId: 1
  }, {
    name: 'Huck',
    breed: 'Miniature Poodle / Shih Tzu',
    status: 'bench',
    imageUrl: 'http://r.ddmcdn.com/w_962/s_f/o_1/cx_25/cy_0/cw_962/ch_1443/APL/uploads/2019/12/Huck-PBXVI.jpg',
    teamId: 1
  }, {
    name: 'Jack',
    breed: 'Chihuahua / Miniature Poodle',
    status: 'bench',
    imageUrl: 'http://r.ddmcdn.com/w_926/s_f/o_1/cx_42/cy_0/cw_926/ch_1389/APL/uploads/2019/12/Jack-PBXVI.jpg',
    teamId: 2
  }, {
    name: 'Kenny',
    breed: 'Golden Retriever / Boxer',
    status: 'bench',
    imageUrl: 'http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Kenny-PBXVI.jpg',
    teamId: 2
  }];

  try {
    await db.sync({force: true});

    await Promise.all(teams.map(teamName => Team.create({name: teamName})));
    await Promise.all(players.map(player => Player.create(player)));

    await db.close();

    console.log("Successfully seeded the database!");
  } catch (error) {
    console.error("There was a problem seeding the database", error);
    await db.close();
  }
}

seed();
