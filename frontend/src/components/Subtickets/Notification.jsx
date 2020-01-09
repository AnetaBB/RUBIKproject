import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Notification extends React.Component {

  accepted = () => {
    this.props.onAccept('listAll');
  };

  render() {
    return (
      <div>
        <Card>
          {this.props.children}
          <Button onClick={this.accepted}>OK</Button>
        </Card>
      </div>
    );
  }
}

export default Notification;