import React from 'react'

const Album = (props) => {
  const name = props.album.name
  const artworkUrl = props.album.artworkUrl
  const artist = props.album.artist.name
  const pickAlbum = props.pickAlbum

  return (
    <div className='album'>
      <a onClick={pickAlbum && pickAlbum(props.album.id)}>
        <img src={artworkUrl} />
        <p>{name}</p>
        <small>{artist}</small>
      </a>
    </div>
  )
}

export default Album
