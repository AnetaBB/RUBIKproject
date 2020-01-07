import React from 'react';
import { Card, Button, Form, Row } from 'react-bootstrap';
import Store from '../../Store';
import List from './TodoList';
import AddTodo from './AddTodo';

export class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      currentTodo: { content: '', userId: '', done: false },
    };
  }

  componentDidMount() {
    this.state.currentTodo.setState({ userId: this.context.user._id });
  }

  inputElement = React.createRef();

  handleInput = e => {
    console.log(e.target.value);
    // const todoContent = e.target.value;
    // this.state.currentTodo.setState({ content: todoContent });
  };

  addTodo = e => {
    e.preventDefault();
    console.log('addtodo');
  };

  removeTodo = e => {
    console.log('removetodo');
  };

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
            <List
              todos={this.state.todos}
              currentTodo={this.state.currentTodo}
              user={this.context.user}
              inputElement={this.inputElement}
              handleInput={this.handleInput}
              addTodo={this.addTodo}
              removeTodo={this.removeTodo}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Todo;
