import React from 'react'
import StoriesList from './StoriesList'
import {connect} from 'react-redux'

const AllStories = (props) => {
  return <StoriesList stories={props.stories} />
}

const mapStateToProps = (state) => {
  return {
    stories: state.stories
  }
}

export default connect(mapStateToProps)(AllStories)

