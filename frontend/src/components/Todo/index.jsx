import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Store from '../../Store';
import List from './ListAllTodos';
import AddTodo from './AddTodo';

export class Todo extends React.Component {
  static contextType = Store;

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title> {this.context.user.name}'s todo list</Card.Title>
            <AddTodo />
            <List />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Todo;
