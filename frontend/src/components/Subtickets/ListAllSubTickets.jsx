import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

class ListAllSubTickets extends React.Component {
  state = { ticketsApi: [] };

  async componentDidMount() {
    const response = await fetch('http://127.0.0.1:8080/api/subtickets');
    const data = await response.json();
    this.setState({ ticketsApi: data });
  }

  render() {
    return (
      <div className="col-sm-12">
        <Card>
          <Card.Header style={{ fontWeight: 500 }}>
            List of subtickets
          </Card.Header>
          <Card.Body>
            <Table responsive="x1" striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Relevance</th>
                  <th>Status</th>
                  <th>Ticket</th>
                  <th>Project</th>
                </tr>
              </thead>
              <tbody>
                {this.state.ticketsApi.map(function(item) {
                  return (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.relevance}</td>
                      <td>{item.status}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ListAllSubTickets;
