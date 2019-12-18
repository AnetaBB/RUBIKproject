import React from 'react';
import Login from './Login';
import Register from './Register';

class RegisterOrLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}

export default RegisterOrLogin;
