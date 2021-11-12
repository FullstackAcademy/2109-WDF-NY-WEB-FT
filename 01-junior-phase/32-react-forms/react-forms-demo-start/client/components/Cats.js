import React from 'react';
import { connect } from 'react-redux';

const Cats = (props) => {
  console.log(props)
  return (
    <div className='container-cats'>
      {props.cats.map((cat) => {
        return (
          <div className='cat' key={cat.id}>
            <div> This is {cat.catName}. </div>
            <img src={cat.imgUrl}></img>
            <div> Owner: {cat.ownerName} </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cats: state.cats,
  };
};

export default connect(mapStateToProps)(Cats);
