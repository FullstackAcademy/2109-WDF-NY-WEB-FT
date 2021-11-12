import React from 'react';
import { connect } from 'react-redux';
import { addNewCat } from '../store/cats';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      catName: 'ENTER NAME',
      ownerName: 'ENTER NAME'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    // Prevent default refreshing behavior from happening
    event.preventDefault();
    // Uncontrolled component
    const catName = event.target.catName.value
    const ownerName = event.target.ownerName.value
    this.props.addCat({catName, ownerName})
    // Controlled component
  }

  // If controlled, then we define handleChange() to control the inputs that we receive
  handleChange(event) {
      // We want to make sure that our state reflects what we've inputted into the form!
      // this.setState({
      //   catName: event.target.catName.value,
      //   ownerName: event.target.ownerName.value
      // })
      console.log(event.target)
      //event.target.value.toUpperCase()
      this.setState({
        [event.target.name]: event.target.value,
      })
      console.log("State", this.state)
  }

  // Controlled components require us to handle the submit AND change events - to update our state AND mirror the user's input to what we have stored on state
  // Uncontrolled components require us to handle just the submit event
  render() {
    return (
      <div>
        <span>Fill out form to add a cat - real or imaginary.</span>
        <form onSubmit = {this.handleSubmit}>
          <div className='container-form-field'>
            <label htmlFor='catName'>Cat Name</label>
            <input
              type='text'
              name='catName'
              onChange ={this.handleChange}
              value={this.state.catName}
            />
          </div>
          <div className='container-form-field'>
            <label htmlFor='ownerName'>Owner Name</label>
            <input
              type='text'
              name='ownerName'
              onChange ={this.handleChange}
              value={this.state.ownerName}
            />
          </div>
          <button type='submit'>Submit!</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCat: (cat) => dispatch(addNewCat(cat)),
  };
};

export default connect(null, mapDispatchToProps)(Form);

// UNCONTROLLED COMPONENTS
// onSubmit

// CONTROLLED COMPONENTS
// onSubmit
// onChange
// value attribute
