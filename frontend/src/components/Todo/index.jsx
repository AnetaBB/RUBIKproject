import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Store from '../../Store';
import List from './TodoList';
import AddTodo from './AddTodo';

export class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('http://127.0.0.1:8080/api/todos');
    const data = await response.json();
    this.setState({ todos: data });
  }

  static contextType = Store;

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title> {this.context.user.name}'s todo list</Card.Title>
            <AddTodo />
            <List todos={this.state.todos} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Todo;
