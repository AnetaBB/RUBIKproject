// import React, { useContext, useState } from 'react';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api_rubikproject from '../../api/api_rubikproject';
// import Store from '../../Store';
import CurrentUsers from './CurrentUsers';

const AddAMilestone = props => {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [owner, setOwner] = useState('');
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const currentUsers = new CurrentUsers();
  currentUsers.getUsers().then(res => {
    setUsers(res);
  });

  // let context = useContext(Store);

  const sendNewMilestone = async e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);

    if (title.length > 1) {
      try {
        // let now = new Date();
        let data = {
          title: title,
          description: description,
          owner: owner,
        };

        let response = await api_rubikproject.post('/api/milestones', data);

        if (response.status === 200) {
          // context.changeStore('projectID', response.data);
          // props.changeContent('project');
        } else {
          console.log(response.body);
          setError('Failure: ' + response.body);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Add a new milestone</h2>
              
      <Form noValidate validated={validated} onSubmit={sendNewMilestone}>
        <Form.Group controlId="milestoneTitle">
          <Form.Label>Milestone Title</Form.Label>            
          <Form.Control
            required
            type="text"
            placeholder="Milestone title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
           
          <Form.Control.Feedback type="invalid">
            Please fill out the milestone            
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="milestoneDescription">
          <Form.Label>Description</Form.Label>            
          <Form.Control
            as="textarea"
            rows="7"
            placeholder="Describe the main milestones you need to reach to finish your project!"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="milestoneOwner">
          <Form.Label>Choose owner</Form.Label>
          <Form.Control
            as="select"
            type="string"
            value={owner}
            onChange={e => {
              setOwner(e.target.value);
            }}
          >
            <option></option>
            {users.map(function(item) {
              return <option key={item._id}>{item.email} </option>;
            })}
          </Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
          
    </div>
  );
};
export default AddAMilestone;
