const db = require('./database');
const Player = require('./Player');
const Team = require('./Team');

Player.belongsTo(Team);
Team.hasMany(Player);

module.exports = {
  db,
  Player,
  Team
}
