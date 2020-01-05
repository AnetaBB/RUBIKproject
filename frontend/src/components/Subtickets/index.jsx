import React from 'react';
import ListAllSubTickets from './ListAllSubTickets';
import GetOneSubTicket from './GetOneSubTicket';
import SubTicketDeleted from './SubTicketDeleted';

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
    else if (pageContent === 'deleted')
      content = (<SubTicketDeleted onAccept={this.changeContent} />);
    else
      content = (<GetOneSubTicket
        getOne={this.state.pageContent}
        onBack={this.changeContent}
        onDelete={this.changeContent}
      />);

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
