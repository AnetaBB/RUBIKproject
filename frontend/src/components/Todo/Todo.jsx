import React from 'react';
import { Form, Button } from 'react-bootstrap';

export class Todo extends React.Component {
  render() {
    return (
      <div key={this.props.todo._id}>
        <Form.Check type="checkbox" label={this.props.todo.content} />
        <Button
          onClick={console.log(`remove todo with id:${this.props.todo._id}`)}
        >
          <i className="fa fa-remove"></i>
        </Button>
      </div>
    );
  }
}

export default Todo;
