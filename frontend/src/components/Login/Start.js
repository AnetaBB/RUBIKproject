import React from 'react';
import Store from '../../Store';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    };
  }

  static contextType = Store;

  render() {
    if (this.context.isLogged) return <Redirect to="/" />;
    return (
      <>
        Na pierwszy widok.
        <br />
        <h2>Become a part of Rubik project...</h2>
      </>
    );
  }
}

export default Login;
