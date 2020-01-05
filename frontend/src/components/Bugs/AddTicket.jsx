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
