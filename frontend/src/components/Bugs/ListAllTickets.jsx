import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

class ListAllTickets extends React.Component {
  state = { ticketsApi: [] };

  async componentDidMount() {
    const response = await fetch('http://127.0.0.1:8080/api/tickets');
    const data = await response.json();
    this.setState({ ticketsApi: data });
  }

  render() {
    return (
      <Card>
        <Card.Header>List of tickets</Card.Header>
        <Card.Body>
          <Table responsive="x1" striped bordered hover variant="dark">
            <thread>
              <tr>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thread>
            <tbody>
              {this.state.ticketsApi.map(function(item) {
                return (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.status}</td>
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

export default ListAllTickets;
