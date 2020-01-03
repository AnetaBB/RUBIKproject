import React from 'react';
import Store from '../../Store';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import api_rubikproject from '../../api/api_rubikproject';

class AddTicket extends React.Component {
  state = {
    title: '',
    description: '',
    priority: 'Low',
    relevance: 'Trivial',
    owner: 'contextUser',
    contributors: 'none',
    status: 'Open',
    projectID: 'contextProjectID',
  };

  static contextType = Store;

  registerUser = async () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
    });

    console.log(this.state.title);
    console.log(this.state.description);
    console.log(this.state.priority);
    console.log(this.state.relevance);
    console.log(this.state.owner);
    console.log(this.state.contributors);
    console.log(this.state.status);
    console.log(this.state.projectID);

    if (
      this.state.title &&
      this.state.description &&
      this.state.priority &&
      this.state.relevance &&
      this.state.owner &&
      this.state.contributors &&
      this.state.status &&
      this.state.projectID
    ) {
      try {
        const response = await api_rubikproject.post('/api/tickets', {
          title: this.state.title,
          description: this.state.description,
          priority: this.state.priority,
          relevance: this.state.relevance,
          owner: this.state.owner,
          contributors: this.state.contributors,
          status: this.state.status,
          projectID: this.state.projectID,
        });
        if (response.status) console.log('Dodane');
      } catch (error) {
        this.setState({ error: 'Incorrect data' });
      }
    } else this.setState({ error: 'Fill in all blanks' });
  };

  render() {
    return (
      <>
        <Card className=" o-hidden border-0 my-5" style={{ width: '100%' }}>
          <Card.Body className="p-0 transparent">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 mb-4">Add bug</h1>
                  </div>
                  <form id="registerForm">
                    <div className="form-group">
                      <label htmlFor="bugTitle">Title</label>
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="bugTitle"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={e => {
                          this.setState({ title: e.target.value });
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bugTextarea">Description</label>
                      <textarea className="form-control" id="bugTextarea" rows="8" placeholder="Description" value={this.state.description}
                        onChange={e => {
                          this.setState({ description: e.target.value });
                        }}
                        required></textarea>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <label htmlFor="bugRelevance">Relevance</label>
                        <Form.Control as="select" id="bugRelevance" value={this.state.relevance} onChange={e => {
                          this.setState({ relevance: e.target.value });
                        }}
                          required>
                          <option>Trivial</option>
                          <option>Minor</option>
                          <option>Major</option>
                          <option>Critical</option>
                        </Form.Control>
                      </div>
                      <div className="col-sm-4">
                        <label htmlFor="bugPriority">Priority</label>
                        <Form.Control as="select" id="bugPriority" value={this.state.priority} onChange={e => {
                          this.setState({ priority: e.target.value });
                        }}
                          required>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          <option>Urgent</option>
                        </Form.Control>
                      </div>
                      <div className="col-sm-4">
                        <label htmlFor="bugStatus">Status</label>
                        <Form.Control as="select" id="bugStatus" value={this.state.status} onChange={e => {
                          this.setState({ status: e.target.value });
                        }}
                          required>
                          <option>Open</option>
                          <option>Assigned</option>
                          <option>Completed</option>
                          <option>Closed</option>
                        </Form.Control>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label htmlFor="bugContributors">Contributors</label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="bugContributors"
                          placeholder="contri"
                          value={this.state.contributors}
                          onChange={e => {
                            this.setState({ contributors: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="bugProject">Project</label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="bugProject"
                          placeholder="project"
                          autoComplete="username"
                          value={this.state.projectID}
                          onChange={e => {
                            this.setState({ projectID: e.target.value });
                          }}
                          required
                        />
                      </div>
                    </div>
                    <p style={{ color: 'red' }}>{this.state.error}</p>
                    <div className="row justify-content-center mt-5">
                      <div className="col-sm-6">
                        <input
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                          onClick={() => {
                            this.registerUser();
                          }}
                          value="Add bug"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AddTicket;
