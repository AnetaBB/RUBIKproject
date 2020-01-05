import React from 'react';
import Store from '../../Store';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import api_rubikproject from '../../api/api_rubikproject';

class AddTicketInputs extends React.Component {
  state = {
    addTicketContent: '',
    title: '',
    description: '',
    priority: 'Low',
    relevance: 'Trivial',
    owner: this.context.user.name,
    contributors: 'none',
    status: 'Open',
    projectName: [],
  };

  static contextType = Store;


  //Czeka na zmianę w backendzie projects
  //Później trzeba te dana wyświetlić w select


  componentDidMount() {
    // this.getContributors();
    this.viewProject();
  }

  viewProject = async () => {
    if (this.context.projectID) {
      this.setState({ projectID: this.context.projectID });
    } else {
      try {
        const response = await api_rubikproject.get(`/api/projects?ownerID=${this.context.user._id}`);
        if (response.status) {
          let responseData = JSON.parse(response.request.response);
          console.log(responseData);
          this.setState({ projectName: responseData })
          console.log(this.state.projectName);
        }
      } catch (error) {
        this.setState({ error: 'Can not get projects list' });
      }
    }
  };

  /*getContributors = async () => {
    if (this.context.projectID) {
      try {
        const response = await api_rubikproject.get(
          `/api/projects/${this.context.projectID}`
        );
        if (response.status) console.log(JSON.parse(response.request.response));
      } catch (error) {
        this.setState({ error: 'Can not get contributors from project' });
      }
    }
  };*/

  addTicketToDB = async () => {
    const addTicketForm = document.getElementById('addTicketForm');
    addTicketForm.addEventListener('submit', e => {
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
      this.state.projectName
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
          projectName: this.state.projectName,
        });
        if (response.status) this.props.changeState('added');
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
                    <h1 className="mb-4">Add bug</h1>
                  </div>
                  <form id="addTicketForm">
                    <div className="form-group">
                      <label htmlFor="bugTitle">
                        <h3>Title</h3>
                      </label>
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
                      <label htmlFor="bugTextarea">
                        <h3>Description</h3>
                      </label>
                      <textarea
                        className="form-control"
                        id="bugTextarea"
                        rows="8"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={e => {
                          this.setState({ description: e.target.value });
                        }}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <label htmlFor="bugRelevance">Relevance</label>
                        <Form.Control
                          as="select"
                          id="bugRelevance"
                          value={this.state.relevance}
                          onChange={e => {
                            this.setState({ relevance: e.target.value });
                          }}
                          required
                        >
                          <option>Trivial</option>
                          <option>Minor</option>
                          <option>Major</option>
                          <option>Critical</option>
                        </Form.Control>
                      </div>
                      <div className="col-sm-4">
                        <label htmlFor="bugPriority">Priority</label>
                        <Form.Control
                          as="select"
                          id="bugPriority"
                          value={this.state.priority}
                          onChange={e => {
                            this.setState({ priority: e.target.value });
                          }}
                          required
                        >
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          <option>Urgent</option>
                        </Form.Control>
                      </div>
                      <div className="col-sm-4">
                        <label htmlFor="bugStatus">Status</label>
                        <Form.Control
                          as="select"
                          id="bugStatus"
                          value={this.state.status}
                          onChange={e => {
                            this.setState({ status: e.target.value });
                          }}
                          required
                        >
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
                        <Form.Control
                          as="select"
                          id="bugProject"
                          onChange={e => {
                            this.setState({ projectName: e.target.value });
                          }}
                          required
                        >
                          {this.state.projectName.map(function (item) {
                            return (
                              <option key={item._id}>{item.title}</option>
                            )
                          })}
                        </Form.Control>
                      </div>
                    </div>
                    <h3 style={{ color: 'red', textAlign: 'center' }}>
                      {this.state.error}
                    </h3>
                    <div className="row justify-content-center mt-5">
                      <div className="col-sm-6">
                        <input
                          type="submit"
                          className="btn btn-primary btn-user btn-block p-2"
                          onClick={() => {
                            this.addTicketToDB();
                          }}
                          value="Add bug"
                          style={{ fontSize: '1.5rem' }}
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

export default AddTicketInputs;
