import React from 'react'
import ReactDOM from 'react-dom'
import store, {incrementCounter} from './store' // imported for you already
import {Provider, connect} from 'react-redux';

const Counter = (props) => {
  const count = props.count;
  const increment = props.increment;

  return (
    <div id='container'>
      <div id='counter'>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCounter())
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('app')
)
