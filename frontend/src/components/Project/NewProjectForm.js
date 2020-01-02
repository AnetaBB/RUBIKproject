import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api_rubikproject from '../../api/api_rubikproject';
import Store from '../../Store';

const NewProjectForm = props => {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  let context = useContext(Store);

  const sendNewProject = async e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);

    if (title.length > 2) {
      try {
        let now = new Date();
        let data = {
          title: title,
          description: description,
          deadline: deadline,
          owner: 'Ola', //todo: add owner from context.me
          createdAt: now,
          contributors: '',
          active: true,
        };

        let response = await api_rubikproject.post('/api/projects', data);
        console.log(response);
        if (response.status === 200) {
          context.changeStore('projectID', response.data);
          props.changeContent('project');
        }
      } catch (error) {
        if (error.message === 'Request failed with status code 409')
        alert('Project name already exist.')
      }
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={sendNewProject}>
        <Form.Group controlId="projectTitle">
          <Form.Label>Project title</Form.Label>
          <Form.Control
            minLength="3"
            required
            type="text"
            placeholder="Project title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please choose an uniq project name with at least 3 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="projectDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Write something about your project"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            value={deadline}
            onChange={e => {
              setDeadline(e.target.value);
            }}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default NewProjectForm;
