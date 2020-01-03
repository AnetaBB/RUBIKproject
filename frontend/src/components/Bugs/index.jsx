import React from 'react';
import ListAllTickets from './ListAllTickets';
import GetOneTicket from './GetOneTicket';

class Bugs extends React.Component {
  state = { bugContent: 'listAll' };

  changeContent = value => {
    this.setState({ bugContent: value });
  };

  renderContent() {
    if (this.state.bugContent === 'listAll')
      return <ListAllTickets viewBugDetail={this.changeContent} />;
    else return <GetOneTicket bugContent={this.state.bugContent} />;
  }

  render() {
    return (
      <>
        <div className="row justify-content-center">{this.renderContent()}</div>
      </>
    );
  }
}

export default Bugs;
