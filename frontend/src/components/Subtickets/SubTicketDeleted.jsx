import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class SubTicketDeleted extends React.Component {

  accepted = () => {
    this.props.onAccept('listAll');
  };

  render() {
    return (
      <div>
        <Card>
          Subticket was deleted successfully!
            <Button onClick={this.accepted}>OK</Button>
        </Card>
      </div>
    );
  }
}

export default SubTicketDeleted;