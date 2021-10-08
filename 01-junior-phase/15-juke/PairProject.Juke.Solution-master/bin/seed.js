#!/usr/bin/env node

const fs = require('fs')
const {db, Album, Artist, Song} = require('../server/db')
const songs = JSON.parse(fs.readFileSync('songs.json', 'utf8'))

const seed = async () => {
  await db.sync({force: true})

  // artists
  const dexter = await Artist.create({name: 'Dexter Britain'})
  const jets = await Artist.create({name: 'Jets Overhead'})
  const nin = await Artist.create({name: 'Nine Inch Nails'})

  // albums
  const ccv2 = await Album.create({
    name: 'Creative Commons Volume 2',
    artistId: dexter.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/creative_commons_vol_2.jpeg'
  })
  const zenith = await Album.create({
    name: 'Zenith',
    artistId: dexter.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/zenith.jpeg'
  })
  const noNations = await Album.create({
    name: 'No Nations (Instrumentals)',
    artistId: jets.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/no_nations.jpeg'
  })
  const ghosts = await Album.create({
    name: 'Ghosts I-IV',
    artistId: nin.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/ghosts_i-iv.jpeg'
  })
  const theSlip = await Album.create({
    name: 'The Slip',
    artistId: nin.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/the_slip.jpeg'
  })

  const artists = {
    'Dexter Britain': dexter,
    'Nine Inch Nails': nin,
    'Jets Overhead': jets
  }

  const albums = {
    'Creative Commons Volume 2': ccv2,
    'Zenith': zenith,
    'No Nations (Instrumentals)': noNations,
    'Ghosts I-IV': ghosts,
    'The Slip': theSlip
  }

  await Promise.all(songs.map(song => Song.create({
    name: song.name,
    audioUrl: song.audioUrl,
    albumId: albums[song.album].id,
    artistId: artists[song.artist].id,
    genre: song.genre
  })))

  db.close()
  console.log(`

    Seeding successful!
    Juke is now ready to rock!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
