import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class GetOneTicket extends React.Component {
  state = { oneTicket: [] };

  getCurrentTicket = async () => {
    const response = await fetch(
      'http://127.0.0.1:8080/api/tickets/5e00d35d9c83429438f31583'
    );
    const data = await response.json();
    this.setState({ oneTicket: data });
  };

  render() {
    return (
      <Card>
        <Card.Header>{this.state.oneTicket.title}</Card.Header>
        <Card.Body>
          <ul key={this.state.oneTicket._id}>
            <li>{this.state.oneTicket.status}</li>
            <li>{this.state.oneTicket.contributors}</li>
            <li>{this.state.oneTicket.description}</li>
            <li>{this.state.oneTicket.priority}</li>
            <li>{this.state.oneTicket.relevance}</li>
          </ul>
          <Button variant="warning" onClick={this.getCurrentTicket}>
            Get first Ticket
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default GetOneTicket;
