
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';

class AddAMilestone extends React.Component {
  state = { usersApi: [] };

  async componentDidMount() {
    const response = await fetch('http://127.0.0.1:8080/api/milestones');
    const data = await response.json();
    this.setState({ usersApi: data });

  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-7">
        <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Milestone</Card.Title>
              <Card.Text>
                Estimates main milestones to finish your project!
              </Card.Text>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" />
              </InputGroup>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          
        </div>
      </div>
    );
  }
}

export default AddAMilestone;




