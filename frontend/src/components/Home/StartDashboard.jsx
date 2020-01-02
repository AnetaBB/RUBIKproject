import React from 'react';
import Store from '../../Store';

class StartDashboard extends React.Component {
  static contextType = Store;

  myFunction = () => {
    console.log(this.context);
  };

  render() {
    return (
      <h1>
        Good morning, <button onClick={this.myFunction}>Click me</button>
      </h1>
    );
  }
}

export default StartDashboard;
