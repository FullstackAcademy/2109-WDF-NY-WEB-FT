import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import stories from './stories'
import authors from './authors'
import singleStory from './singleStory'
import singleAuthor from './singleAuthor'

const reducer = combineReducers({
  stories,
  authors,
  singleStory,
  singleAuthor
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed:true}))
)

const store = createStore(reducer, middleware)

export default store
