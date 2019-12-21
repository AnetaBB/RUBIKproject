import React from 'react';
import Card from 'react-bootstrap/Card';

class ListAllUsers extends React.Component {
  state = { usersApi: [] };

  async componentDidMount() {
    const response = await fetch('http://127.0.0.1:8080/api/users');
    const data = await response.json();
    this.setState({ usersApi: data });
  }

  render() {
    return (
      <Card>
        <Card.Header>List of users</Card.Header>
        <Card.Body>
          <Card.Title>Users:</Card.Title>
          <div className="table-responsive">
            <table
              className="table table-bordered text-gray-300"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {this.state.usersApi.map(function(item) {
                  return (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.surname}</td>
                      <td>{item.email}</td>
                      <td>{item.active ? 'Yes' : 'No'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ListAllUsers;
