import React from 'react';
import ListAllMilestones from './ListAllMilestones';
import AddAMilestone from './AddAMilestone';

class Milestone extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <ListAllMilestones />
        </div>
        {/* <div className="col-lg-12">
          <AddAMilestone />
        </div> */}
      </div>
    );
  }
}

export default Milestone;