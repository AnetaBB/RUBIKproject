import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

class ListAllTickets extends React.Component {
  state = { ticketsApi: [], projectName: '' };

  async componentDidMount() {
    //const response = await fetch('http://127.0.0.1:8080/api/tickets');
    //const data = await response.json();
    //this.setState({ ticketsApi: data });
    this.setState({ ticketsApi: await this.getTickets() });
  }

  async getTickets() {
    const response = await fetch('/api/tickets');
    const data = await response.json();
    return data;
  }

  render() {
    return (
      <div className='col-sm-12'>
        <Card>
          <Card.Header>List of tickets</Card.Header>
          <Card.Body>
            <Table
              responsive='x1'
              striped
              bordered
              hover
              variant='dark'
              id='tableListAllBugs'
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Relevance</th>
                  <th>Status</th>
                  <th>Project</th>
                </tr>
              </thead>
              <tbody
                className='viewBugDetails'
                onClick={e =>
                  this.props.viewBugDetail(
                    e.target.parentNode.lastChild.textContent
                  )
                }
              >
                {this.state.ticketsApi.map(function (item) {
                  return (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.status}</td>
                      <td>{item.relevance}</td>
                      <td>{item.projectName}</td>
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

export default ListAllTickets;
