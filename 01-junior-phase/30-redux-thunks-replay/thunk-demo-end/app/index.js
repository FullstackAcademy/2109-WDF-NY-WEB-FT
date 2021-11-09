import React from 'react'
import ReactDOM from 'react-dom'
import Pies from './pies'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Pies />
  </Provider>,
  document.getElementById('app')
)
