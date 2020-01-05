import React from 'react';
import ListAllSubTickets from './ListAllSubTickets';
import GetOneSubTicket from './GetOneSubTicket';

class SubTickets extends React.Component {
  state = { pageContent: 'listAll' };

  changeContent = (contentValue) => {
    this.setState({ pageContent: contentValue });
  };

  render() {
    const pageContent = this.state.pageContent;
    let content;

    if (pageContent === 'listAll')
      content = (<ListAllSubTickets onSelect={this.changeContent} />);
    else
      content = (<GetOneSubTicket getOne={this.state.pageContent} onBack={this.changeContent} />);

    return (
      <>
        <div className="row justify-content-center">
          {content}
        </div>
      </>
    );
  }
}

export default SubTickets;
