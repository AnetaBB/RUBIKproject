import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AddSubticket extends React.Component {
  state = { title: '', description: '', priority: 'Low', relevance: 'Trivial' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(
      this.state.title,
      this.state.description,
      this.state.priority,
      this.state.relevance
    );
  };

  onFormCancel = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <Card>
        <Card.Header style={{ fontWeight: 500 }}>New subticket</Card.Header>
        <Card.Body>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group controlId="formSubticketTitle" className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder="title"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formSubticketDescription" className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="description"
                rows="5"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
              />
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
            </Form.Row>

            <Form.Row className="justify-content-end">
              <Button variant="warning" type="submit" className="mr-2">
                Add
              </Button>

              <Button
                variant="warning"
                className="mr-1"
                onClick={this.onFormCancel}
              >
                Cancel
              </Button>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default AddSubticket;
