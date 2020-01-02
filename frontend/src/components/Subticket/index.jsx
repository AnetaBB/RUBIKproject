import React from 'react';
import ListAllSubTickets from './ListAllSubTickets';
import GetOneSubTicket from './GetOneSubTicket';

class Bugs extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-lg-7">
            <ListAllSubTickets />
          </div>
          <div className="col-lg-5">
            <GetOneSubTicket />
          </div>
        </div>
      </>
    );
  }
}

export default Bugs;
