import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

const NewProjectForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="container">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="projectTitle">
            <Form.Label>Project title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder='Project title'
            />
            <Form.Control.Feedback type="invalid">
              Please choose a project name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="projectDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder='Write something about your project'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>

          <Button
            type="submit">Submit</Button>

        </Form>
    </div>
  )
};

export default NewProjectForm;
