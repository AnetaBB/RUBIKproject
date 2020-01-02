import React from 'react';
import ListAllComments from './ListAllComments';
import AddComment from './AddComment';
class Comment extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <ListAllComments />
        </div>
        {
          <div className="col-lg-12">
            <AddComment />
          </div>
        }
      </div>
    );
  }
}

export default Comment;
