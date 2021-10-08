import React from 'react'
import Album from './Album'

const AlbumsList = (props) => {
  const albums = props.albums
  const pickAlbum = props.pickAlbum

  return (
    <div id='albums' className='row wrap'>
      {
        albums.map(album => <Album album={album} key={album.id} pickAlbum={pickAlbum} />)
      }
    </div>
  )
}

export default AlbumsList
