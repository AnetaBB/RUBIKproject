import React from 'react';
import Store from '../../Store';
import Card from 'react-bootstrap/Card';
import api_rubikproject from '../../api/api_rubikproject';

class AddTicket extends React.Component {
  state = {
    title: '',
    description: '',
    priority: '',
    relevance: '',
    owner: '',
    contributors: '',
    status: '',
    projectID: '',
  };

  static contextType = Store;

  registerUser = async () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
    });

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
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block justify-content-center">
                <i className="fas fa-bug dice-icon mt-5"></i>
              </div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 mb-4">Create an Account!</h1>
                  </div>
                  <form id="registerForm">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="Title"
                          value={this.state.title}
                          onChange={e => {
                            this.setState({ title: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Description"
                          value={this.state.description}
                          onChange={e => {
                            this.setState({ description: e.target.value });
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Priority"
                        autoComplete="username"
                        value={this.state.priority}
                        onChange={e => {
                          this.setState({ priority: e.target.value });
                        }}
                        required
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="relevance"
                          value={this.state.relevance}
                          onChange={e => {
                            this.setState({ relevance: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Owner"
                          value={this.state.owner}
                          onChange={e => {
                            this.setState({ owner: e.target.value });
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="contri"
                          value={this.state.contributors}
                          onChange={e => {
                            this.setState({ contributors: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="status"
                          value={this.state.status}
                          onChange={e => {
                            this.setState({ status: e.target.value });
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="project"
                        autoComplete="username"
                        value={this.state.projectID}
                        onChange={e => {
                          this.setState({ projectID: e.target.value });
                        }}
                        required
                      />
                    </div>
                    <p style={{ color: 'red' }}>{this.state.error}</p>
                    <input
                      type="submit"
                      className="btn btn-primary btn-user btn-block"
                      onClick={() => {
                        this.registerUser();
                      }}
                      value="Register Account"
                    />
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
