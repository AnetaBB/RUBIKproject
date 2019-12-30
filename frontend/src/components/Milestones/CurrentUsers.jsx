import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

class CurrentUsers extends React.Component {
  state = { usersApi: [] };

  async componentDidMount () {
    // const response = await fetch('http://127.0.0.1:8080/api/users');
    // const data = await response.json();
    this.setState({ usersApi: await this.getUsers() });
  }
  async getUsers () {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  }
  render () {
    return (
      <Card>
        <Card.Header>List of users</Card.Header>
        <Card.Body>
          <Table responsive='x1' striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Unique users</th>
              </tr>
            </thead>
            <tbody>
              {this.state.usersApi.map(function (item) {
                return (
                  <tr key={item._id}>
                    <td>{item.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

export default CurrentUsers;
