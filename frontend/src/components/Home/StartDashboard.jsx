import React from 'react';
import Store from '../../Store';

class StartDashboard extends React.Component {
  state = { user: this.context.user };

  static contextType = Store;


  render() {
    return <h1>Good morning, {this.state.user} ;)</h1>;
    console.log(this.context.user);
  }
}

export default StartDashboard;
