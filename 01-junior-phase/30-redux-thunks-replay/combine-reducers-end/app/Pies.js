import React from 'react'
import {connect} from 'react-redux'
import {fetchPies} from './reducers/allPies'
import axios from 'axios'

class Pies extends React.Component {

  componentDidMount () {
    this.props.fetchPies()
  }
  render () {
    const pies = this.props.pies
    console.log(this.props)
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

// This refers to our ENTIRE redux state.
const mapState = (state) => {
  console.log('REDUX STATE', state)
  return {
    pies: state.allPies
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchPies: () => dispatch(fetchPies())
  }
}

export default connect(mapState, mapDispatch)(Pies)
