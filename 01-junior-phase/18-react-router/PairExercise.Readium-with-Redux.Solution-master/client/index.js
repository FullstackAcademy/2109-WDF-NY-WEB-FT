import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import {Provider} from 'react-redux'
import store from './store'
import {HashRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
)
