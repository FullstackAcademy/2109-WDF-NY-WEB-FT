import { combineReducers } from 'redux';
import userReducer from './userReducer';
import roomsReducer from './roomsReducer';

//Keeping these constants in this file because the specs are importing them from here
export const AUTHENTICATED = 'AUTHENTICATED';
export const GOT_ROOMS = 'GOT_ROOMS';
export const BOOK_ROOM = 'BOOK_ROOM';

export default combineReducers({
  user: userReducer,
  rooms: roomsReducer
});
