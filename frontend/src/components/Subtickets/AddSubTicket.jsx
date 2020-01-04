import React from 'react';
import AddSubTicketForm from './AddSubTicketForm';
import AddSubTicketConfirmation from './AddSubTicketConfirmation';

class AddSubTicket extends React.Component {
  state = { wasSubticketAdded: false };

  changeContent = value => {
    this.setState({ wasSubticketAdded: value });
  };

  render() {
    const wasSubticketAdded = this.state.wasSubticketAdded;
    let content;

    if (!wasSubticketAdded)
      content = (<AddSubTicketForm onSubmit={this.changeContent} />);
    else if (wasSubticketAdded)
      content = (<AddSubTicketConfirmation onOk={this.changeContent} />);

    return <div>{content}</div>;
  }
}

export default AddSubTicket;
