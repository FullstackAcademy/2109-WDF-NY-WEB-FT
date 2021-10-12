import {GOT_ROOMS, BOOK_ROOM} from './reducer';

const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ROOMS:
      return action.payload
    case BOOK_ROOM:
      return state.map(room => {
        if (room.id === action.roomId) {
          return { ...room, booked: true}
        } else { return room }
      })
    default:
      return state
  }
}

export default roomsReducer;
