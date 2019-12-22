import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class GetOneUser extends React.Component {
  state = { oneUser: [] };

  getCurrentUser = async () => {
    const response = await fetch(
      'http://127.0.0.1:8080/api/users/5dfe0eb61c9d44000014eac7'
    );
    const data = await response.json();
    this.setState({ oneUser: data });
  };

  render() {
    return (
      <Card>
        <Card.Header>Detail User</Card.Header>
        <Card.Body>
          <ul key={this.state.oneUser._id}>
            <li>{this.state.oneUser.name}</li>
            <li>{this.state.oneUser.surname}</li>
            <li>{this.state.oneUser.email}</li>
          </ul>
          <Button variant="warning" onClick={this.getCurrentUser}>
            Get first user
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default GetOneUser;
