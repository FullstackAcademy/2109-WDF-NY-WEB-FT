import axios from 'axios'

const SET_SINGLE_AUTHOR = 'SET_SINGLE_AUTHOR'
const SET_AUTHOR_COMMENTS = 'SET_AUTHOR_COMMENTS'
const SET_AUTHOR_STORIES = 'SET_AUTHOR_STORIES'


const setSingleAuthor = (author) => {
  return {
    type: SET_SINGLE_AUTHOR,
    author
  }
}

const setAuthorComments = (comments) => {
  return {
    type: SET_AUTHOR_COMMENTS,
    comments
  }
}

const setAuthorStories = (stories) => {
  return {
    type: SET_AUTHOR_STORIES,
    stories
  }
}

export const fetchSingleAuthor = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/authors/${id}`)
      dispatch(setSingleAuthor(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchAuthorComments = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/authors/${id}/comments`)
      dispatch(setAuthorComments(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchAuthorStories= (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/authors/${id}/stories`)
      dispatch(setAuthorStories(data))
    } catch (err) {
      console.log(err)
    }
  }
}
const initialState = {info: {}, comments: [], stories: []}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_AUTHOR:
      return {...state, info: action.author}
    case SET_AUTHOR_COMMENTS:
      return {...state, comments: action.comments}
    case SET_AUTHOR_STORIES:
      return {...state, stories: action.stories}
    default:
      return state
  }
}
