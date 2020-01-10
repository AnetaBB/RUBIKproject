import React from 'react';
import { Form, Button } from 'react-bootstrap';

export class ListTodos extends React.Component {
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
          {/* {this.props.todos.map(todo => {
            return <Todo key={todo._id} todo={todo} />;
          })} */}
          <input
            placeholder="Task"
            ref={this.props.inputElement}
            value={this.props.currentTodo.content}
            onChange={this.props.handleInput}
          />
          <button type="submit"> Add Task </button>
        </Form.Group>
      </div>
    );
  }
}

export default ListTodos;
