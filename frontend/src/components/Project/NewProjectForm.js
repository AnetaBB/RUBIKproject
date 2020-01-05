import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import api_rubikproject from '../../api/api_rubikproject';
import Store from '../../Store';
import moment from "moment";

const NewProjectForm = props => {
  const [projectData, setProject] = useState({});
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  let context = useContext(Store);

  // jeśli komponent otrzyma w props ID projektu, tzn ze mamy do czynienia z edycją, i pobieramy dane o projekcie z bazy
  useEffect(() => {
    if (props.projectID) {
      let isSubscribed = true;
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/projects/${props.projectID}`);
          if (response.status === 200) {
            const projectData = await response.json();
            if (isSubscribed) setProject(projectData);
          }
        } catch (error) {
          if (isSubscribed)
            setError('Cannot retrieve project ' + props.projectID);
        }
      };
      fetchData();
      return () => { isSubscribed = false };
    }
  }, [props.projectID]);

  useEffect(() => {
    if (projectData.title) {
      setTitle(projectData.title);
      setDescription(projectData.description);
      if (projectData.deadline){
        setDeadline(moment(projectData.deadline).format('YYYY-MM-DD'));
      }
    }
  }, [projectData.title]);

  const sendProject = async e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);

    if (!props.projectID && title.length > 2) {
      try {
        let now = new Date();
        let data = {
          title: title,
          description: description,
          deadline: deadline,
          owner: context.user._id,
          createdAt: now,
          editedAt: '',
          contributors: '',
          active: true,
        };

        let response = await api_rubikproject.post('/api/projects', data);
        if (response.status === 200) {
          context.changeStore('projectID', response.data);
          props.changeContent('project');
        }
      } catch (error) {
        if (error.message === 'Request failed with status code 409')
          alert('Project name already exist.');
      }
    } else if (props.projectID && title.length > 2){
      try {
        let now = new Date();
        let data = {
          title: title,
          description: description,
          deadline: deadline,
          editedAt: now,
          contributors: ''
        };

        let response = await api_rubikproject.put(`/api/projects/${props.projectID}`, data);
        if (response.status === 200) {
          props.changeContent('project');
        }
      } catch (error) {
        if (error.message === 'Request failed with status code 409')
          alert('Project name already exist.');
      }
    }
  };

  if (error) {
    return (
      <div className="container">
        <div className="row">{error.toString()}</div>
      </div>
    );
  } else {
    return (
      <>
        <Form noValidate validated={validated} onSubmit={sendProject}>
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

          <Button type="submit">{props.projectID ? 'Update' : 'Submit'}</Button>
        </Form>
      </>
    );
  }
};

export default NewProjectForm;
