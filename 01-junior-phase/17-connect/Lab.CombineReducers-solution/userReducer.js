import {AUTHENTICATED, BOOK_ROOM} from './reducer';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.payload
    case BOOK_ROOM:
      return {...state, bookedRoom: action.roomId }
    default:
      return state
  }
}

export default userReducer;
