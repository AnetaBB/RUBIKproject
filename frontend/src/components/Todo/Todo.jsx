import React from 'react';
import { Form, Button } from 'react-bootstrap';

export class Todo extends React.Component {
  render() {
    return (
      <div>
        <Form.Check type="checkbox" label={this.props.todo.content} />
        <Button>
          <i className="fa fa-remove"></i>
        </Button>
      </div>
    );
  }
}

export default Todo;
