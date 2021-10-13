import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const Red = (props) => {
  return (
    <div className='red'>
      <h1>RED</h1>
    </div>
  )
}

const Blue = (props) => {
  return (
    <div className='blue'>
      <h1>BLUE</h1>
    </div>
  )
}

const Main = (props) => {
  return (
    <div id='container'>
      <div id='navbar'>
        {/* vv Navigation vv */}
        <Link to='/blue'>Go to Blue</Link>
        <Link to='/red'>Go to Red</Link>
      </div>

      <div id='main-section'>
        {/* vv Routes vv */}
        <Route path='/blue' component={Blue} />
        <Route path='/red' component={Red} />
        <Route exact path='/' component={Red} />
      </div>
    </div>
  )
}

const app = document.getElementById('app')
ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  app
)
