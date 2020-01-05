import React from 'react';
import ListAllSubTickets from './ListAllSubTickets';
import GetOneSubTicket from './GetOneSubTicket';
import SubTicketDeleted from './SubTicketDeleted';
import EditSubTicketForm from './EditSubTicketForm';
import SubTicketEdited from './SubTicketEdited';

class SubTickets extends React.Component {
  state = { pageContent: 'listAll', subTicketId: '' };

  changeContent = (contentValue, idValue) => {
    this.setState({
      pageContent: contentValue,
      subTicketId: idValue,
    });
  };

  render() {
    const pageContent = this.state.pageContent;
    let content;

    if (pageContent === 'listAll')
      content = (<ListAllSubTickets onSelect={this.changeContent} />);
    else if (pageContent === 'deleted')
      content = (<SubTicketDeleted onAccept={this.changeContent} />);
    else if (pageContent === 'edit')
      content = (<EditSubTicketForm
        subId={this.state.subTicketId}
        onSubmit={this.changeContent}
        onCancel={this.changeContent}
      />);
    else if (pageContent === 'edited')
      content = (<SubTicketEdited onAccept={this.changeContent} />);
    else if (pageContent === 'getOne')
      content = (<GetOneSubTicket
        getOne={this.state.subTicketId}
        onBack={this.changeContent}
        onEdit={this.changeContent}
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
