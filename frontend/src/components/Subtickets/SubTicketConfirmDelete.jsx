import React from 'react';
import api_rubikproject from '../../api/api_rubikproject';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class SubTicketConfirmDelete extends React.Component {

  delete = async () => {
    try {
      await api_rubikproject.delete(`api/subtickets/${this.props.subId}`);
      this.props.onDelete('deleteNotification');
    } catch (error) {
      console.log(error);
    }
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