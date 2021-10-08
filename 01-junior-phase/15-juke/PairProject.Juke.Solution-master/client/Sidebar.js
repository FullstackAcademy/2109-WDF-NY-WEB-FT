import React from 'react'

const Sidebar = (props) => {
  const deselectAlbum = props.deselectAlbum

  return (
    <div id='sidebar'>
      <img src='juke.svg' id='logo' />
      <section>
        <h4>
          <a onClick={deselectAlbum}>ALBUMS</a>
        </h4>
      </section>
    </div>
  )
}

export default Sidebar
