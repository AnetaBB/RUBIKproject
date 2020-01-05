import React from 'react';
import Form from 'react-bootstrap/Form';

export class ListAllTodos extends React.Component {
  state = { todosApi: [] };

  async componentDidMount() {
    const response = await fetch('http://127.0.0.1:8080/api/todos');
    const data = await response.json();
    this.setState({ todosApi: data });
  }
  render() {
    return (
      <div>
        <Form.Group controlId="formBasicCheckbox">
          {this.state.todosApi.map(item => {
            return (
              <div key={item._id}>
                <Form.Check type="checkbox" label={item.content} />
              </div>
            );
          })}
        </Form.Group>
      </div>
    );
  }
}

export default ListAllTodos;
