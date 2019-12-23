import React from 'react';
import ListAllUsers from './ListAllUsers';
import GetOneUser from './GetOneUser';

class Users extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-7">
          <ListAllUsers />
        </div>
        <div className="col-lg-5">
          <GetOneUser />
        </div>
      </div>
    );
  }
}

export default Users;
