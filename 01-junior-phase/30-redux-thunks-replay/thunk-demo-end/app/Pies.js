import React from 'react'
import {connect} from 'react-redux'
import {fetchPies} from './store'
import axios from 'axios'

class Pies extends React.Component {

  async componentDidMount () {
    this.props.fetchPies()
  }
  render () {
    const {pies} = this.props

    return (
      <div>
        {pies.map((pie) => {
          return (
            <div key={pie.id}>
              <img src={pie.imageUrl} />
              <p>{pie.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    pies: state.pies
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchPies: (data) => dispatch(fetchPies(data))
  }
}

export default connect(mapState, mapDispatch)(Pies)
