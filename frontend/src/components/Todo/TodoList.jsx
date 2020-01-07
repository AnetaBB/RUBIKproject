import React from 'react';
import { Todo } from './Todo';
import { Form, Button } from 'react-bootstrap';

export class ListAllTodos extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // state = { todosApi: [] };

  componentDidUpdate() {
    // this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.addTodo}>
          <Form.Row>
            <Form.Group controlId="addTodo">
              <Form.Control
                type="todo"
                placeholder="Add Todo"
                ref={this.props.inputElement}
                onChange={this.handleInput}
                // value={this.props.currentTodo.content}
              />
              <Button variant="primary" type="submit">
                <i className="fa fa-plus" />
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
        <Form.Group controlId="formBasicCheckbox">
          {this.props.todos.map(todo => {
            return <Todo key={todo._id} todo={todo} />;
          })}
        </Form.Group>
      </div>
    );
  }
}

export default ListAllTodos;
