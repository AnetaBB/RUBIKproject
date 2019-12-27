import React, { useEffect, useState, useContext } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Context} from "../../Store";


const Project = () =>  {
  const [ project, setProject ] = useState({});

  let context = useContext(Context);

  useEffect(()=>{
    fetch(`http://localhost:8080/api/projects/${context.projectID}`)
      .then(result => result.json())
      .then(project => {
        setProject({title: project.title})
      });
  });

    return (
      <div className="container">

        <div className="row">
          {
            project.title
              ? <h1 className="col-lg-9 mb-4">{project.title}</h1>
              : <h1 className="col-lg-9 mb-4">Loading project...</h1>
          }
          <Button className="col-lg-3 col-md-5 col-sm-6 mb-4" variant="primary">+ Add new project</Button>
        </div>

        <div className="row">
          <div className="col-lg-7 mb-4">
            <Card>
              <Card.Header>Your tasks in {project.title}</Card.Header>
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                  <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Deadline</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>task1</td>
                      <td>low</td>
                      <td>taskDeadline</td>
                    </tr>
                    <tr>
                      <td>task2</td>
                      <td>height</td>
                      <td>taskDeadline</td>
                    </tr>
                    <tr>
                      <td>View all tasks</td>
                      <td></td>
                      <td>View all deadlines</td>
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
                <ProgressBar className="mb-4" variant="danger" now={80} />
                <Card.Subtitle className="mb-2 text-muted">Frontend</Card.Subtitle>
                <ProgressBar className="mb-4" variant="warning" now={60} />
                <Card.Subtitle className="mb-2 text-muted">Backend</Card.Subtitle>
                <ProgressBar className="mb-4" variant="primary" now={20} />
                <Card.Subtitle className="mb-2 text-muted">Database</Card.Subtitle>
                <ProgressBar className="mb-4" variant="info" now={20} />
                <Card.Subtitle className="mb-2 text-muted">Project progress</Card.Subtitle>
                <ProgressBar className="mb-4" variant="success" now={50} />
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>
    )
}

export default Project;
