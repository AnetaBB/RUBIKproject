import React from 'react';
import { Todo } from './Todo';
import { Form } from 'react-bootstrap';
import api_rubikproject from '../../api/api_rubikproject';

export class ListAllTodos extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // state = { todosApi: [] };

  removeTodo = todoId => {
    // delete request to db
    // delete from state of the component
    console.log('smth');
  };

  render() {
    return (
      <div>
        <Form.Group controlId="formBasicCheckbox">
          {this.props.todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </Form.Group>
      </div>
    );
  }
}

export default ListAllTodos;
