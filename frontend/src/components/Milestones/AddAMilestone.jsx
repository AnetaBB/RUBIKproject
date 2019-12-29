import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const AddAMilestone = () => {
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
    <div className='container'>
      <h2>Add a new milestone</h2>
              
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId='milestoneTitle'>
          <Form.Label>Milestone Title</Form.Label>            
          <Form.Control required type='text' placeholder='Milestone title' />
           
          <Form.Control.Feedback type='invalid'>
            Please fill out the milestone            
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='milestoneDescription'>
          <Form.Label>Description</Form.Label>            
          <Form.Control
            as='textarea'
            rows='7'
            placeholder='Describe the main milestones you need to reach to finish your project!'
          />
        </Form.Group>
        <Form.Group controlId='milestoneOwner'>
          <Form.Label>Choose owner</Form.Label>
          <Form.Control as='select'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='milestoneContributors'>
          <Form.Label>Choose contributor</Form.Label>
          <Form.Control as='select'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>{' '}
        <Button type='submit'>Submit</Button>
      </Form>
          
    </div>
  );
};
export default AddAMilestone;
