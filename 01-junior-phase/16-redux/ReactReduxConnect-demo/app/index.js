import React from 'react';
import ReactDOM from 'react-dom';
import store, {increment} from './store'; // imported for you already
import {connect, Provider} from 'react-redux'

/*
REACT-REDUX CONNECT
1. connect(): connect our store to our React components by mapping state and action dispatches held in our store to props of our React component.
2. Provider: new component available through react-redux that will make our redux store available to our components through our connect() call.

*/
const Counter = (props) => {
  console.log("Props", props)
    return (
      <div id='container'>
        <div id='counter'>
          <h1>{props.count}</h1>
           <button onClick={props.increment}>Increment</button>
        </div>
      </div>
    );
}

// 1. mapStateToProps: telling connect which pieces of Redux state the component will have access to

const mapStateToProps = (state) => {
  console.log('Mapping state to props: ', state)
  return {
    count: state.count
  }
}
// 2. mapDispatchToProps: telling connect which action dispatches the component should be able to make

const mapDispatchToProps = (dispatch) => {
  console.log('Mapping dispatch to props', dispatch)
  return {
    increment: () => dispatch(increment())
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('app')
);

/*
In order to use connect(), you have to:
1. Define mapStateToProps
2. Define mapDispatchToProps
3. Wrap your CONNECTED component in a Provider component, and pass in your store as a prop.

*/
