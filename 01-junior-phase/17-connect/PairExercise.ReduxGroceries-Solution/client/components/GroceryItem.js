import React from 'react';
import { connect } from 'react-redux';
import { setQuantity } from '../store';

const GroceryItem = ({ onClick, bought, text, id, setQuantity }) => {
  const handleChange = evt => {
    setQuantity(id, evt.target.value);
  };
  return (
    <div>
      <li
        onClick={onClick}
        style={{ textDecoration: bought ? 'line-through' : 'none' }}
      >
        {text}
      </li>
      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setQuantity: (id, num) => {
      dispatch(setQuantity(id, num));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GroceryItem);
