import React from 'react';
import { Form, Button } from 'react-bootstrap';
import api_rubikproject from '../../api/api_rubikproject';

export class ListAllTodos extends React.Component {
  state = { todosApi: [] };

  async componentDidMount() {
    const response = await fetch('http://127.0.0.1:8080/api/todos');
    const data = await response.json();
    this.setState({ todosApi: data });
  }

  removeTodo = todoId => {
    // delete request to db
    // delete from state of the component
    console.log('smth');
  };

  render() {
    return (
      <div>
        <Form.Group controlId="formBasicCheckbox">
          {this.state.todosApi.map(item => {
            return (
              <div key={item._id}>
                <Form.Check type="checkbox" label={item.content} />
                <Button onClick={this.removeTodo}>
                  <i className="fa fa-remove"></i>
                </Button>
              </div>
            );
          })}
        </Form.Group>
      </div>
    );
  }
}

export default ListAllTodos;
