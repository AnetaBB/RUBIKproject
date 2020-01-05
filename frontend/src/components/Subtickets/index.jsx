import React from 'react';
import ListAllSubTickets from './ListAllSubTickets';
//import GetOneSubTicket from './GetOneSubTicket';

class SubTickets extends React.Component {
  render() {
    return (
      <>
        <div className="row justify-content-center">
          <ListAllSubTickets />
          {/* <div className="col-lg-5">
            <GetOneSubTicket />
          </div> */}
        </div>
      </>
    );
  }
}

export default SubTickets;
