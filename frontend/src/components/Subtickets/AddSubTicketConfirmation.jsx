import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class AddSubTicketConfirmation extends React.Component {

  onAccept = () => {
    this.props.onOk(false);
  }

  render() {
    return (
      <div>
        <Card>Subticket added successfully
          <Button onClick={this.onAccept}>OK</Button>
        </Card>
      </div>
    );
  }
}

export default AddSubTicketConfirmation;