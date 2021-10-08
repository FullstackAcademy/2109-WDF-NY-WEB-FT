const db = require('./db')
const Album = require('./album')
const Artist = require('./artist')
const Song = require('./song')

Song.belongsTo(Album)
Album.hasMany(Song)

Song.belongsTo(Artist)
Artist.hasMany(Song)

Album.belongsTo(Artist)
Artist.hasMany(Album)

module.exports = {
  db,
  Album,
  Artist,
  Song
}
