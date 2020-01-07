import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class SubTicketConfirmDelete extends React.Component {

  delete = () => {
    console.log('Subticket was deleted successfully!');
    this.props.onDelete('deleteNotification');
  };

  cancel = () => {
    this.props.onCancel('listAll');
  };

  render() {
    return (
      <div>
        <Card>
          Are you sure?
          <Button variant="danger" onClick={this.delete}>Delete</Button>
          <Button variant="warning" onClick={this.cancel}>Cancel</Button>
        </Card>
      </div>
    );
  }
}

export default SubTicketConfirmDelete;