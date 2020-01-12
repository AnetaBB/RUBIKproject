import React from 'react';
import { ListGroup } from 'react-bootstrap';

export class ListTodos extends React.Component {
  createList = todo => {
    return (
      <ListGroup.Item
        key={todo._id}
        onClick={() => this.props.removeTodo(todo._id)}
      >
        {todo.content}
      </ListGroup.Item>
    );
  };
  render() {
    const todos = this.props.todos;
    const todoList = todos.map(this.createList);
    return (
      <div>
        <ListGroup>{todoList}</ListGroup>
      </div>
    );
  }
}

export default ListTodos;
