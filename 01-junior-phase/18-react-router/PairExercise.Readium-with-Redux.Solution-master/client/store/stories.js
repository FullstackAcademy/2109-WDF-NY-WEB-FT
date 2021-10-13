import axios from 'axios'

const SET_STORIES = 'SET_STORIES'

export const setStories = (stories) => {
  return {
    type: SET_STORIES,
    stories
  }
}

export const fetchStories = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/stories')
      dispatch(setStories(data))
    } catch(err) {
      console.log(err)
    }
  }
}

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_STORIES:
      return action.stories
    default:
      return state
  }
}
