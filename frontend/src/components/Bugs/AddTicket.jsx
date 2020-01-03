import React from 'react';
import Store from '../../Store';
import AddTicketInputs from './AddTicketInputs';

class AddTicket extends React.Component {
  state = {
    addTicketContent: '',
    title: '',
    description: '',
    priority: 'Low',
    relevance: 'Trivial',
    owner: this.context.user.name,
    contributors: 'none',
    status: 'Open',
    projectName: 'contextProjectID',
  };

  static contextType = Store;

  /*
  Czeka na zmianę w backendzie projects
  Później trzeba te dana wyświetlić w select


  componentDidMount() {
    this.getContributors();
    this.viewProject();
  }

  viewProject = async () => {
    console.log('view project');
    if (this.context.projectID) {
      this.setState({ projectID: this.context.projectID });
    } else {
      try {
        const response = await api_rubikproject.get('/api/projects', {
          params: { owner: '5e00c8ed49b57a3b1c657d57' },
        });
        if (response.status) {
          let responseData = JSON.parse(response.request.response);
          console.log(responseData);
        }
      } catch (error) {
        this.setState({ error: 'Can not get projects list' });
      }
    }
  };

  getContributors = async () => {
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

  changeState = value => {
    this.setState({ addTicketContent: value });
  };

  renderContent = () => {
    if (this.state.addTicketContent === 'added')
      return (
        <>
          <h2>Bug został dodany pomyślnie</h2>
          <h3>Aby zobaczyć przejdź na sidebarze Bugs -> View all</h3>
        </>
      );
    else return <AddTicketInputs changeState={this.changeState} />;
  };

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default AddTicket;
