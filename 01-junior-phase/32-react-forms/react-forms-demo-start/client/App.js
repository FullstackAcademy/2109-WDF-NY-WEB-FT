import React from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import Cats from './components/Cats';
import { fetchCats } from './store/cats';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    this.props.loadCats();
  }

  render() {
    return (
      <div className='container'>
        <h1>Cats & React Forms</h1>
        <Form />
        <Cats />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCats: () => dispatch(fetchCats()),
  };
};

export default connect(null, mapDispatchToProps)(App);
