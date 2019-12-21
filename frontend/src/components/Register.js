import React from 'react';
import { Redirect } from 'react-router-dom';
import Store from '../Store';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = Store;

  render() {
    if (this.context.isLogged) return <Redirect to="/" />;
    return <>Inputy dla rejestracji </>;
  }
}

export default Register;
