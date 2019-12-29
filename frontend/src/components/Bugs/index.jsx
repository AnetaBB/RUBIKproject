import React from 'react';
import ListAllTickets from './ListAllTickets';
import GetOneTicket from './GetOneTicket';

class Bugs extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-7">
          <ListAllTickets />
        </div>
        <div className="col-lg-5">
          <GetOneTicket />
        </div>
      </div>
    );
  }
}

export default Bugs;
