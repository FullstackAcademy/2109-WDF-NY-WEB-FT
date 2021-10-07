import React from 'react';
import ErrorTester from './ErrorTester';


const lifecycleStyle = 'color: purple; font-size: 16px'

// This is just a logging function that makes the lifecycle log messages
// stand out with color. FANCY!
const logLifeCycle = (name, callback) => {
  console.group(`%c${name}`, lifecycleStyle);
  if (callback) {
    callback();
  }
  console.groupEnd();
}

// This component registers a function for EVERY React Lifecycle
// method, so you can see when they fire.
export default class LifeCycles extends React.Component {
  // This is called when React first creates your component.
  // It recieves props as it's first argument, but you don't have
  // to use it, as React glues props to `this.props` by default

  //  https://reactjs.org/docs/react-component.html#constructor

  constructor(props) {
    super(props);
    logLifeCycle('constructor', () => {
      console.log('props', props);
      console.log('this', this);
    });

    this.state = {
      count: 0,
      hasError: false,
      error: null,
      info: null,
      childThrowError: false
    };
  }

  // This is called when your component mounts for the first time
  // It doesn't receive any arguments
  //
  // https://reactjs.org/docs/react-component.html#componentdidmount

  componentDidMount() {
    logLifeCycle('componentDidMount');
  }

  // This is called anytime the component re-renders
  // it is not called the first time.
  // You get passed the value of the props and state from the previous render
  // and optionally a snapshot object which is the return value from
  // getSnapshotBeforeUpdate
  //
  // https://reactjs.org/docs/react-component.html#componentdidupdate

  componentDidUpdate(prevProps, prevState, snapshot) {
    logLifeCycle('componentDidUpdate', () => {
      console.log('prevProps', prevProps);
      console.log('prevState', prevState);
      console.log('snapshot', snapshot);
    });
  }

  // This is called when your component is unmounted, or in other words
  // when it is REMOVED from the component tree, usually because some
  // parent component no longer renders it.
  //
  // https://reactjs.org/docs/react-component.html#componentwillunmount

  componentWillUnmount() {
    logLifeCycle('componentWillUnmount')
  }

  /**** Seldom used Lifecycle methods: ****/

  // Ran right before render. returns an object to update the state or null
  // to not update anything.
  // YOU PROBABLY SHOULDN'T USE THIS ONE
  //
  // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

  static getDerivedStateFromProps(props, state) {
    logLifeCycle('getDerivedStateFromProps', () => {
      console.log('props', props);
      console.log('state', state);
    });
    return null;
  }

  // This is called anytime the component re-renders.
  // You can return boolean to determine if the component should
  // actually update or not.
  // YOU PROBABLY SHOULDN'T USE THIS ONE
  //
  // https://reactjs.org/docs/react-component.html#shouldcomponentupdate

  shouldComponentUpdate(nextProps, nextState, snapshot) {
    logLifeCycle("shouldComponentUpdate", () => {
      console.log('nextProps', nextProps);
      console.log('nextState', nextState);
      console.log('snapshot', snapshot);
    })
    return true;
  }

  // This is called right before the DOM is updated. Lets you get in there
  // and control very DOM specific things like the scroll position of the
  // window and other DOM manipulations that are otherwise hard to achieve
  // with React.
  // YOU PROBABLY SHOULDN'T USE THIS ONE
  //
  // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

  getSnapshotBeforeUpdate(prevProps, prevState) {
    logLifeCycle('getSnapshotBeforeUpdate', () => {
      console.log('prevProps', prevProps);
      console.log('prevState', prevState);
    })
    return null;
  }

  /**** Error Boundary Handling Functions ****/

  // This gets called anytime an error occurs in a descendant component
  // It allows you to return a state object with info about the error.
  //
  // https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror
  static getDerivedStateFromError(error) {
    logLifeCycle('getDerivedStateFromError', () => {
      console.log('error', error);
    });
    return {
      hasError: true,
      error
    }
  }

  // This gets called anytime an error occurs in a descendant component
  // It allows you to do things like log the error. You can do side effects
  // in here, so you could say, send the error back to the backend to be logged
  // into a database or something.
  //
  // https://reactjs.org/docs/react-component.html#componentdidcatch

  componentDidCatch(error, info) {
    logLifeCycle('componentDidCatch', () => {
      console.log('error', error)
      console.log('info', info);
    });
  }

  /**** Event Handlers ****/

  // This is our click handler, I'm just updating the count here.
  // It gets passed a "Synthetic Event"

  handleClick(event) {
    this.setState({
      count: this.state.count + 1
    });
  }

  // This is here so we can set this to true,
  // and force the child to throw an error to test React's
  // error boundary lifecycle methods

  makeChildThrowError(event) {
    this.setState({
      childThrowError: true
    });
  }

  /**** Rendering Functions ****/

  // This renders the component.
  // Render does not get passed any arguments.
  // You must return either JSX or null

  // https://reactjs.org/docs/react-component.html#render

  render() {
    logLifeCycle('render', () => {
      console.log('this', this);
    });

    const error = this.state.error;
    // We can do logic in here and conditionally return things.
    // So in this case, when there's an error,
    // render it to the screen
    if (this.state.hasError) {
      return (
        <div id="error">
          <h1>An error occured.</h1>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </div>
      );
    }

    // if there's no error, return the normal JSX
    return (
      <>
        <h1>{this.props.title}</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={event => this.handleClick(event)}>Click Me!</button>
        <button onClick={event => this.makeChildThrowError(event)}>Make Child Throw Error</button>
        <ErrorTester throwError={this.state.childThrowError}/>
      </>
    );
  }
}
