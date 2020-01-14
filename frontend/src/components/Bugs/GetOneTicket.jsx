import React from 'react';
import api_rubikproject from '../../api/api_rubikproject';

class GetOneTicket extends React.Component {
  state = { oneTicket: [] };

  async componentDidMount() {
    const response = await api_rubikproject.get(
      `/api/tickets/${this.props.bugContent}`
    );
    if (response.status) {
      let responseData = JSON.parse(response.request.response);
      this.setState({ oneTicket: responseData });
    }
  }

  render() {
    const ticket = this.state.oneTicket;
    return (
      <div className="col-sm-10">
        <h2>{ticket.title}</h2>
        <p className="mt-5">{ticket.description}</p>
        <div className="row mt-4">
          <div className="col-sm-6">
            <p>Assigned:</p>
            {ticket.contributors ? ticket.contributors : 'nobody'}
          </div>
          <div className="col-sm-6">
            <p>Owner:</p>
            {ticket.owner}
          </div>
        </div>
        <div className="row justify-content-center mt-5 text-center">
          <div className="col-sm-4">
            Status:
            <br />
            <h5>{ticket.status}</h5>
          </div>
          <div className="col-sm-4">
            Priority:
            <br />
            <h5>{ticket.priority}</h5>
          </div>
          <div className="col-sm-4">
            Relevance:
            <br />
            <h5>{ticket.relevance}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default GetOneTicket;
