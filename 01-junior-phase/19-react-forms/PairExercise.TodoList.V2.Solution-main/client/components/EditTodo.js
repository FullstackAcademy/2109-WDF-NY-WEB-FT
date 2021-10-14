import React, { Component } from 'react';
import { deleteTodo, updateTodo, fetchTodo } from '../store/effects/effects';
import { setTodo } from '../store/actions/actions';
import { connect } from 'react-redux';

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      assignee: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchTodo(id);
  }

  componentWillUnmount() {
    this.props.clearTodo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todo.id !== this.props.todo.id) {
      this.setState({
        taskName: this.props.todo.taskName || '',
        assignee: this.props.todo.assignee || ''
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateTodo({ ...this.props.todo, ...this.state });
  }

  render() {
    const { assignee, taskName } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <form id='todo-form' onSubmit={handleSubmit}>
          <label htmlFor='taskName'>Task Name:</label>
          <input name='taskName' onChange={handleChange} value={taskName} />

          <label htmlFor='assignee'>Assign To:</label>
          <input name='assignee' onChange={handleChange} value={assignee} />

          <button type='submit'>Submit</button>
        </form>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <button
            className='remove'
            onClick={() => this.props.deleteTodo(this.props.match.params.id)}
          >
            Delete
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ todo }) => ({
  todo
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateTodo: (todo) => dispatch(updateTodo(todo, history)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo, history)),
  fetchTodo: (id) => dispatch(fetchTodo(id)),
  clearTodo: () => dispatch(setTodo({}))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
