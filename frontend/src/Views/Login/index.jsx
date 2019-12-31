import React from 'react';
import Store from '../../Store';
import TopNavbarLogin from '../../components/Login/TopNavbarLogin';
import Welcome from '../../components/Login/Welcome';
import LoginInputs from '../../components/Login/LoginInputs';
import Register from '../../components/Login/Register';

class Login extends React.Component {
  state = { changeContent: 'start' };

  static contextType = Store;

  changeContent = wartosc => {
    this.setState({ changeContent: wartosc });
  };

  displayContent() {
    if (this.state.changeContent === 'start')
      return <Welcome changeContent={this.changeContent} />;
    if (this.state.changeContent === 'login')
      return <LoginInputs changeContent={this.changeContent} />;
    if (this.state.changeContent === 'register') return <Register />;
  }

  render() {
    return (
      <>
        <TopNavbarLogin changeContent={this.changeContent} />
        <div id="main" className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            {this.displayContent()}
          </div>
        </div>
      </>
    );
  }
}

export default Login;
