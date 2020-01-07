import React from 'react';
import ListAllSubTickets from './ListAllSubTickets';
import GetOneSubTicket from './GetOneSubTicket';
import SubTicketConfirmDelete from './SubTicketConfirmDelete';
import EditSubTicketForm from './EditSubTicketForm';
import Notification from './Notification';

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
    else if (pageContent === 'confirmDelete')
      content = (<SubTicketConfirmDelete
        subId={this.state.subTicketId}
        onDelete={this.changeContent}
        onCancel={this.changeContent}
      />);
    else if (pageContent === 'deleteNotification')
      content = (
        <Notification onAccept={this.changeContent}>
          Subticked was deleted successfully!
        </Notification>
      );
    else if (pageContent === 'edit')
      content = (<EditSubTicketForm
        subId={this.state.subTicketId}
        onSubmit={this.changeContent}
        onCancel={this.changeContent}
      />);
    else if (pageContent === 'editNotification')
      content = (
        <Notification onAccept={this.changeContent}>
          Subticked was edited successfully!
        </Notification>
      );
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
