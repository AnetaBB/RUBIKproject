import React from 'react';
import api_rubikproject from '../../api/api_rubikproject';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class EditSubTicketForm extends React.Component {
  state = { title: '', description: '', priority: 'Low', relevance: 'Trivial' };

  onFormSubmit = async e => {
    e.preventDefault();
    const putBodyReq = {
      title: this.state.title,
      //description: this.state.description,
      //priority: this.state.priority,
      //relevance: this.state.relevance,
    };

    try {
      const res = await api_rubikproject.put(`/api/subtickets/${this.props.subId}`, putBodyReq);
      this.props.onSubmit('editNotification');
      console.log(res);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  cancelEdit = () => {
    this.props.onCancel('listAll');
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
                  Edit
                </Button>
                <Button variant="warning" onClick={this.cancelEdit}>
                  Cancel
                </Button>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EditSubTicketForm;
