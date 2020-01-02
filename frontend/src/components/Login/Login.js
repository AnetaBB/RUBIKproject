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
        Inputy dla logowania
        <br />
        <button
          onClick={() => {
            this.context.isLogged = localStorage.setItem(
              'token',
              'wartoscTokena'
            );
            window.location.reload();
          }}
        >
          Przejdź do Dashboard
        </button>
      </>
    );
  }
}

export default Login;
