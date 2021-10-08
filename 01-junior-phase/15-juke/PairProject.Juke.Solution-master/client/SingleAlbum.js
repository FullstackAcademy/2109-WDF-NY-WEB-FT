import React from 'react'
import Album from './Album'
import Songs from './Songs'

const SingleAlbum = (props) => {
  const {album, toggleOne, isPlaying, currentSong} = props

  return (
    <div id='single-album' className='column'>
      <Album album={album} />
      <Songs songs={album.songs} toggleOne={toggleOne} isPlaying={isPlaying} currentSong={currentSong} />
    </div>
  )
}

export default SingleAlbum
