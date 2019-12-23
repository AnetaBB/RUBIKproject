import React from 'react';
import Login from './Login';
import Register from './Register';
import Start from './Start';

/* Tutaj miałaby być mechanika zmiany inputów, które mają się wyświetlać? 
   Nie powinno to być folder wyżej? */

class RegisterOrLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Start />
        <Login />
        <Register />
      </>
    );
  }
}

export default RegisterOrLogin;
