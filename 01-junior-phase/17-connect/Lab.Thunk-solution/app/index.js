import React from 'react'
import ReactDOM from 'react-dom'
import Pets from './pets'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Pets />
  </Provider>,
  document.getElementById('app')
)
