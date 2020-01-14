import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

class ListAllSubTickets extends React.Component {
  state = { subTicketsApi: [] };

  async componentDidMount() {
    const response = await fetch('/api/subtickets');
    const data = await response.json();
    this.setState({ subTicketsApi: data });
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
              <tbody
                onClick={e =>
                  this.props.onSelect(
                    'getOne',
                    e.target.parentNode.lastChild.textContent
                  )
                }
              >
                {this.state.subTicketsApi.map(function(item) {
                  return (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.relevance}</td>
                      <td>{item.status}</td>
                      <td>{item.ticket}</td>
                      <td>project-name</td>
                      <td style={{ display: 'none' }}>{item._id}</td>
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
