import React from 'react';
import api_rubikproject from '../../api/api_rubikproject';
import Store from '../../Store';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListAllTickets from '../Bugs/ListAllTickets';

class AddSubTicketForm extends React.Component {
  static contextType = Store;
  state = { title: '', description: '', priority: 'Low', relevance: 'Trivial', ticket: '', ticketId: '', tickets: [] };

  componentDidMount() {
    const listAllTickets = new ListAllTickets();
    listAllTickets.getTickets().then(tickets => {
      const ticket = tickets[0];
      this.setState({ tickets: tickets, ticket: ticket.title, ticketId: ticket._id });
    });
  }

  onFormSubmit = async e => {
    e.preventDefault();
    const postBodyReq = {
      ticketId: this.state.ticketId,
      ticket: this.state.ticket,
      title: this.state.title,
      description: this.state.description,
      priority: this.state.priority,
      relevance: this.state.relevance,
      contributor: this.context.user.name
    };

    try {
      const res = await api_rubikproject.post('/api/subtickets', postBodyReq);
      this.props.onSubmit(true);
      console.log(res);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  onChangeTicket = (e) => {
    const tickets = this.state.tickets;
    const ticket = tickets.filter(element => element.title === e.target.value);
    this.setState({ ticket: ticket[0].title, ticketId: ticket[0]._id });
  };

  render() {
    return (
      <div>
        <Card>
          <Card.Header style={{ fontWeight: 500 }}>New subticket</Card.Header>
          <Card.Body>
            <Form onSubmit={e => this.onFormSubmit(e)}>
              <Form.Group controlId="formSubticketTitle" className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  placeholder="title"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formSubticketDescription" className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="description"
                  rows="5"
                  value={this.state.description}
                  onChange={e => this.setState({ description: e.target.value })}
                />
                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback> */}
              </Form.Group>

              <Form.Row>
                <Form.Group controlId="formSubticketPriority" as={Col}>
                  <Form.Label>Priority</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.priority}
                    onChange={e => this.setState({ priority: e.target.value })}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formSubticketRelevance" as={Col}>
                  <Form.Label>Relevance</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.relevance}
                    onChange={e => this.setState({ relevance: e.target.value })}
                  >
                    <option>Trivial</option>
                    <option>Minor</option>
                    <option>Major</option>
                    <option>Critical</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formSubticketTicket" as={Col}>
                  <Form.Label>Ticket</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.ticket}
                    onChange={e => this.onChangeTicket(e)}
                  >
                    {this.state.tickets.map(function (item) {
                      return <option key={item._id}>{item.title}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row className="justify-content-end">
                <Button variant="warning" type="submit" className="mr-2">
                  Add
                </Button>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AddSubTicketForm;
