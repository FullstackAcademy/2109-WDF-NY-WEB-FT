import React from 'react';
import { connect } from 'react-redux';
import GroceryItem from './GroceryItem';
import { toggleGrocery } from '../store';
import Footer from './Footer';

const GroceryList = props => {
  console.log('groceries', props.groceries);
  return (
    <ul>
      {props.groceries.map(grocery => (
        <GroceryItem
          key={grocery.id}
          id={grocery.id}
          {...grocery}
          onClick={() => props.toggleGrocery(grocery.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  const showBought = state.groceries.filter(grocery => grocery.bought);
  const showActive = state.groceries.filter(grocery => !grocery.bought);

  const filterFunc = function(state, groceries) {
    if (state.visFilter === 'SHOW_BOUGHT') {
      return showBought;
    } else if (state.visFilter === 'SHOW_ACTIVE') {
      return showActive;
    } else {
      return state.groceries;
    }
  };

  return {
    groceries: filterFunc(state, state.groceries),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleGrocery: id => dispatch(toggleGrocery(id)),
  };
};

// const GroceryListToExport = connect(mapStatetoProps);
// export default GroceryListToExport(GroceryList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);
