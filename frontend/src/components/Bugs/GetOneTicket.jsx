import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AddSubticket from './AddSubticket';

class GetOneTicket extends React.Component {
  state = { oneTicket: [], isFormCreated: false };

  getCurrentTicket = async () => {
    const response = await fetch(
      'http://127.0.0.1:8080/api/tickets/5e00d35d9c83429438f31583'
    );
    const data = await response.json();
    this.setState({ oneTicket: data });
  };

  onAddSubticketSubmit = async (t, d, p, r) => {
    const postBodyReq = {
      title: t,
      description: d,
      priority: p,
      relevance: r,
    };

    try {
      const res = await axios.post(
        'http://localhost:8080/api/subtickets',
        postBodyReq
      );
      console.log(res);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  onAddSubticketCancel = () => {
    this.setState({ isFormCreated: false });
  };

  render() {
    const isFormCreated = this.state.isFormCreated;
    let form;

    if (isFormCreated)
      form = (
        <AddSubticket
          onSubmit={this.onAddSubticketSubmit}
          onCancel={this.onAddSubticketCancel}
        />
      );

    return (
      <div>
        <Card className="mb-2">
          <Card.Header>{this.state.oneTicket.title}</Card.Header>
          <Card.Body>
            <ul key={this.state.oneTicket._id}>
              <li>{this.state.oneTicket.status}</li>
              <li>{this.state.oneTicket.contributors}</li>
              <li>{this.state.oneTicket.description}</li>
              <li>{this.state.oneTicket.priority}</li>
              <li>{this.state.oneTicket.relevance}</li>
            </ul>
            <Button
              variant="warning"
              className="mr-2"
              onClick={this.getCurrentTicket}
            >
              Get first Ticket
            </Button>
            <Button
              variant="warning"
              onClick={() => this.setState({ isFormCreated: true })}
            >
              Add subticket
            </Button>
          </Card.Body>
        </Card>
        {form}
      </div>
    );
  }
}

export default GetOneTicket;
