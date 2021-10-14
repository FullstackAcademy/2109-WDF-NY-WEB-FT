import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Todos = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <h2>
              <Link to={`/todos/${todo.id}`}>Task: {todo.taskName}</Link>
            </h2>
            <p>assigned by {todo.assignee}</p>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(mapStateToProps)(Todos);
