import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';

class ListAllMilestones extends React.Component {
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
          <Card>
            <Card.Header>
              Your milestones for this project 
            </Card.Header>
            <Card.Body>
            <div className="table-responsive">
            <table
              className="table table-bordered text-gray-300"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
               
                  <th>Title</th>
                  <th>Description</th>
                  <th>Owner</th>
                  <th> Contributor</th>
                </tr>
              </thead>
              <tbody>
                {this.state.usersApi.map(function(item) {
                  return (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.owner}</td>
                      <td>{item.contributors ? 'Yes' : 'No'}</td>
                    </tr>
                  );
                })}
              </tbody>
                </table>
                </div>
            </Card.Body>
          </Card>
          
        </div>
      </div>
    );
  }
}

export default ListAllMilestones;
