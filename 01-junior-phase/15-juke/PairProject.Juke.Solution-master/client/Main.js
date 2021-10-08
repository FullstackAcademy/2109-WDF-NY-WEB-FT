import React from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import SingleAlbum from './SingleAlbum'
import AlbumsList from './AlbumsList'
import Player from './Player'

export default class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      albums: [],
      selectedAlbum: {}
    }
    this.pickAlbum = this.pickAlbum.bind(this)
    this.deselectAlbum = this.deselectAlbum.bind(this)
  }

  async componentDidMount () {
    const {data} = await axios.get('/api/albums')
    this.setState({
      albums: data
    })
  }

  pickAlbum (albumId) {
    return async () => {
      const {data} = await axios.get(`/api/albums/${albumId}`)
      this.setState({
        selectedAlbum: data
      })
    }
  }

  deselectAlbum () {
    this.setState({
      selectedAlbum: {}
    })
  }

  render () {
    const {next, prev, toggle, toggleOne, currentSong, isPlaying} = this.props

    return (
      <div id='main' className='row container'>
        <Sidebar deselectAlbum={this.deselectAlbum} />
        <div className='container'>
          {
            this.state.selectedAlbum.id
              ? <SingleAlbum
                album={this.state.selectedAlbum}
                toggleOne={toggleOne}
                isPlaying={isPlaying}
                currentSong={currentSong}
              />
              : <AlbumsList albums={this.state.albums} pickAlbum={this.pickAlbum} />
          }
        </div>
        <Player prev={prev} next={next} toggle={toggle} isPlaying={isPlaying} />
      </div>
    )
  }
}
