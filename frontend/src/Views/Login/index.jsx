import React from 'react';
import Store from '../../Store';
import api_rubikproject from '../../api/api_rubikproject';
import TopNavbarLogin from '../../components/Login/TopNavbarLogin';
import Welcome from '../../components/Login/Welcome';
import LoginInputs from '../../components/Login/LoginInputs';
import Register from '../../components/Login/Register';

class Login extends React.Component {
  state = { changeContent: 'start' };

  static contextType = Store;

  registerUser = async () => {
    try {
      const response = await api_rubikproject.post('/api/users', {
        name: 'tomek',
        surname: 'tomek',
        email: 'tomek7@gmail.com',
        password: 'qweasd',
        repeat_password: 'qweasd',
        active: true,
      });
      console.log(response);
      if (response.status)
        this.context.isLogged = localStorage.setItem('token', 'wartoscTokena');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  changeContent = wartosc => {
    this.setState({ changeContent: wartosc });
  };

  displayContent() {
    if (this.state.changeContent === 'start')
      return <Welcome changeContent={this.changeContent} />;
    if (this.state.changeContent === 'login')
      return <LoginInputs changeContent={this.changeContent} />;
    if (this.state.changeContent === 'register')
      return <Register registerUser={this.registerUser} />;
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
