import axios from 'axios'

const SET_SINGLE_STORY = 'SET_SINGLE_STORY'

const setSingleStory = (story) => {
  return {
    type: SET_SINGLE_STORY,
    story
  }
}

export const fetchSingleStory = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/stories/${id}`)
      dispatch(setSingleStory(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_STORY:
      return action.story
    default:
      return state
  }
}
