import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import socket from './socket'

// Action Types :-)
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER'
const GOT_NEW_MESSAGE = 'GOT_NEW_MESSAGE'
const USER_SET = 'USER_SET'

// Action Creators
const gotMessagesFromServer = messages => ({
    type: GOT_MESSAGES_FROM_SERVER,
    messages,
})
export const gotNewMessage = message => ({
    type: GOT_NEW_MESSAGE,
    message,
})
export const userSet = userName => ({
    type: USER_SET,
    payload: userName,
})

// Thunk Creator
export const fetchMessages = () => async dispatch => {
    const { data: messages } = await axios.get('/api/messages')
    dispatch(gotMessagesFromServer(messages))
}
export const postMessage = message => async (dispatch, getState) => {
    message.name = getState().user
    const { data: newMessage } = await axios.post('/api/messages', message)
    dispatch(gotNewMessage(newMessage))
    socket.emit('new-message', newMessage)
}

// Reducer
const initialState = {
    messages: [],
    user: 'Cody',
}

// // alternative pattern for writing reducer cases
// const mapTypeToCallback = {
//     [GOT_MESSAGES_FROM_SERVER]: (state, action) => ({
//         ...state,
//         messages: action.messages,
//     }),
// }

// :: (State, Action) -> State
const reducer = (state = initialState, action) => {
    // return mapTypeToCallback[action.type](state, action)
    switch (action.type) {
        case GOT_MESSAGES_FROM_SERVER:
            return { ...state, messages: action.messages }
        case GOT_NEW_MESSAGE:
            return { ...state, messages: [...state.messages, action.message] }
        case USER_SET:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
