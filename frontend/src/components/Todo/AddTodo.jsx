import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Store from '../../Store';
import api_rubikproject from '../../api/api_rubikproject';

export class AddTodo extends React.Component {
  state = {
    userId: '5e0b9d59158f4e0a517b2866',
    // userId: this.context.user._id,
    done: false,
    content: '',
  };

  static contextType = Store;

  addTodo = async () => {
    if (this.state.content) {
      try {
        const response = await api_rubikproject.post('/api/todos/', this.state);
      } catch {
        alert('error');
      }
    }
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Control
            type="add-todo"
            value={this.state.content}
            onChange={e => {
              this.setState({ content: e.target.value });
            }}
            placeholder="What you need todo?"
          />
          <Button variant="primary" onClick={this.addTodo}>
            <i className="fa fa-plus"></i>
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddTodo;
