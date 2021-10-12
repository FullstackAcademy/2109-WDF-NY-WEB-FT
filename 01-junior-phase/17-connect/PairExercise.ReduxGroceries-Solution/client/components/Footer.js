import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setVisibilityFilter } from '../store';

const Footer = props => {
  return (
    <div>
      <button onClick={() => props.visibilityFilter('SHOW_ALL')}>All</button>
      <button onClick={() => props.visibilityFilter('SHOW_ACTIVE')}>
        Active
      </button>
      <button onClick={() => props.visibilityFilter('SHOW_BOUGHT')}>
        Bought
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    visibilityFilter: visFilter => {
      return dispatch(setVisibilityFilter(visFilter));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Footer);
