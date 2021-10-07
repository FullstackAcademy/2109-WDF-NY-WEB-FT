import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycles from './LifeCycles';

const app = document.getElementById('app');

// App Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lifeCycleShown: true
    }
  }

  unmountLifeCycles() {
    this.setState({
      lifeCycleShown: false
    })
  }

  mountLifeCycles() {
    this.setState({
      lifeCycleShown: true
    })
  }

  render() {
    if (this.state.lifeCycleShown) {
      return (
        <>
          <button onClick={() => this.unmountLifeCycles()}>Unmount LifeCycles Component</button>
          <LifeCycles title="Welcome to the LifeCycles App" />
        </>
      )
    }

    return (
      <>
        <button onClick={() => this.mountLifeCycles()}>Mount LifeCycles App</button>
      </>
    )
  }
}

ReactDOM.render(<App/>, app);
