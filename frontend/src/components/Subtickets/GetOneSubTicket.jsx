import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class GetOneSubTicket extends React.Component {
  state = { oneSubTicket: [] };

  async componentDidMount() {
    const response = await fetch(
      `http://127.0.0.1:8080/api/subtickets/${this.props.getOne}`
    );
    const data = await response.json();
    this.setState({ oneSubTicket: data });
  }

  backToAll = () => {
    this.props.onBack('listAll');
  };

  editSubTicket = () => {
    this.props.onEdit('edit', this.props.getOne);
  };

  deleteSubTicket = () => {
    this.props.onDelete('deleted');
  };

  render() {
    return (
      <Card>
        <Card.Header>{this.state.oneSubTicket.title}</Card.Header>
        <Card.Body>
          <ul key={this.state.oneSubTicket._id}>
            <li>{this.state.oneSubTicket.status}</li>
            <li>{this.state.oneSubTicket.contributor}</li>
            <li>{this.state.oneSubTicket.description}</li>
            <li>{this.state.oneSubTicket.priority}</li>
            <li>{this.state.oneSubTicket.relevance}</li>
          </ul>
          <Button variant="warning" className="mr-1" onClick={this.backToAll}>
            Back
          </Button>
          <Button variant="warning" className="mr-1" onClick={this.editSubTicket}>
            Edit
          </Button>
          <Button variant="danger" onClick={this.deleteSubTicket}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default GetOneSubTicket;
