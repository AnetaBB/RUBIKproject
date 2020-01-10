import React from 'react';
import { Card, Button, Form, Row } from 'react-bootstrap';
import { Context } from '../../Store';
import ListTodo from './TodoList';
import AddTodo from './AddTodo';
import api_rubikproject from '../../api/api_rubikproject';

export class Todo extends React.Component {
  inputElement = React.createRef();
  static contextType = Context;
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: { content: '', userId: '' },
    };
  }

  removeTodo = async todoId => {
    const filteredTodos = this.state.todos.filter(todo => {
      return this.context.user._id === todo.userId && todo._id !== todoId;
    });
    this.setState({
      todos: filteredTodos,
    });
    await api_rubikproject.delete(`/api/todos/${todoId}`);
    console.log('removetodo');
  };
  componentDidMount() {
    const userId = { userId: this.context.user._id };
    this.setState({ userId: userId });
  }

  handleInput = e => {
    const todoContent = e.target.value;
    const currentTodo = {
      content: todoContent,
      userId: this.context.user._id,
    };
    this.setState({ currentTodo });
  };

  addTodo = async e => {
    e.preventDefault();
    console.log('addtodo');
    const newTodo = this.state.currentTodo;
    if (newTodo.text !== '') {
      const todos = [...this.state.todos, newTodo];
      await api_rubikproject.post('/api/todos/', newTodo);
      this.setState({
        todos: todos,
        currentTodo: {
          content: '',
          userId: this.context.user._id,
        },
      });
    }
  };

  async componentDidMount() {
    const response = await fetch('http://127.0.0.1:8080/api/todos');
    const data = await response.json();
    this.setState({ todos: data });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title> {this.context.user.name}'s todo list</Card.Title>
            <AddTodo
              addTodo={this.addTodo}
              inputElement={this.inputElement}
              handleInput={this.handleInput}
              currentTodo={this.state.currentTodo}
            />
            <ListTodo todos={this.state.todos} removeTodo={this.removeTodo} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Todo;
