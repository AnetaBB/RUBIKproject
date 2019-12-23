import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar'


const Project = () =>  {
  const {project, getProject} = useState('');

  const getProjectData = async () => {
    const response = await fetch
  };

    return (
      <div className="container">

        <div className="row">
          <h1 className="col-lg-9 mb-4">project.name</h1>
          <Button className="col-lg-3 col-md-5 col-sm-6 mb-4" variant="primary">+ Add new project</Button>
        </div>

        <div className="row">
          <div className="col-lg-7 mb-4">
            <Card>
              <Card.Header>Your tasks in "project.name"</Card.Header>
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
                      <td>projectDeadline</td>
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
              <Card.Header>Project name</Card.Header>
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
