import React, { useEffect, useState, useContext } from 'react';
import { ProgressBar, Table, Button, Card } from "react-bootstrap";
import { Context } from "../../Store";
import DeletingProjectModal from "./DeletingProjectModal";

const Project = (props) =>  {
  const [project, setProject] = useState({});
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  let context = useContext(Context);

  const handleClose = () => setShow(true);

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/projects/${context.projectID}`);
        if (response.status === 200) {
          const projectData = await response.json();
          if (isSubscribed) setProject({title: projectData.title})
        }
      } catch (error) {
          if (isSubscribed) setError("Cannot retrieve project " + context.projectID)
      }
    };
    fetchData();
    return () => { isSubscribed = false };
  }, [context.projectID]);

    if (error) {
      return (
        <div className="container">
          <div className="row">{error.toString()}</div>
        </div>
          )
    } else {
      return (
        <>
          <div className="row">
            {
              project.title
                ? <h1 className="col-lg-9 mb-4">{project.title}</h1>
                : <h1 className="col-lg-9 mb-4">Loading project...</h1>
            }
            <Button className="col-lg-3 col-md-5 col-sm-6 mb-4" variant="primary">add task for this project</Button>
          </div>

          <div className="row">
            <div className="col-lg-7 mb-4">
              <Card>
                <Card.Header>Your tasks in {project.title}</Card.Header>
                <Card.Body>
                  <Table className="text-gray-300" striped bordered hover>
                    <thead>
                    <tr>
                      <th>Task</th>
                      <th>Priority</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>task1</td>
                      <td>low</td>
                    </tr>
                    <tr>
                      <td>task2</td>
                      <td>height</td>
                    </tr>
                    <tr>
                      <td>View all tasks</td>
                      <td></td>
                    </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-5 mb-4">
              <Card>
                <Card.Header>Task details</Card.Header>
                <Card.Body>
                  <Card.Title>Name of first task from table</Card.Title>
                  <Card.Text>
                    Description... but you can click the next one in the table to view its description
                  </Card.Text>
                  <Button variant="primary">Go to this task</Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7 mb-4">
              <Card>
                <Card.Header>{project.title} progress</Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">Bugs/Issues</Card.Subtitle>
                  <ProgressBar className="mb-4" variant="danger" now={80}/>
                  <Card.Subtitle className="mb-2 text-muted">Frontend</Card.Subtitle>
                  <ProgressBar className="mb-4" variant="warning" now={60}/>
                  <Card.Subtitle className="mb-2 text-muted">Backend</Card.Subtitle>
                  <ProgressBar className="mb-4" variant="primary" now={20}/>
                  <Card.Subtitle className="mb-2 text-muted">Database</Card.Subtitle>
                  <ProgressBar className="mb-4" variant="info" now={20}/>
                  <Card.Subtitle className="mb-2 text-muted">Project progress</Card.Subtitle>
                  <ProgressBar className="mb-4" variant="success" now={50}/>
                </Card.Body>
              </Card>
            </div>
          </div>
          <Button className="mr-3"
            variant="warning"
            onClick={()=> props.changeContent('newProject')}>
            Edit this project
          </Button>
          <Button
            variant="danger"
            onClick={handleClose}>
            Delete this project
          </Button>
          {
            show ? <DeletingProjectModal changeContent={props.changeContent}/> : <span></span>
          }
        </>
      )
    }
};

export default Project;
