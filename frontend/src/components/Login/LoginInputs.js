import React from 'react';
import Store from '../../Store';
import { Redirect } from 'react-router-dom';
import api_rubikproject from '../../api/api_rubikproject';

class LoginInputs extends React.Component {
  state = { user: '', isLogged: false, email: '', pass: '', error: '' };

  static contextType = Store;

  loginUser = async () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
    });

    if (this.state.email && this.state.pass) {
      try {
        const response = await api_rubikproject.post('/api/login', {
          email: this.state.email,
          password: this.state.pass,
        });

        if (response.status) {
          const userData = JSON.parse(response.request.response);
          window.localStorage.setItem('rubikproject_user', userData._id);
          this.context.isLogged = localStorage.setItem(
            'token',
            'wartoscTokena'
          );
          window.location.reload();
        }
      } catch (error) {
        this.setState({ error: 'Incorrect email or password' });
      }
    } else this.setState({ error: 'E-mail & password missing' });
  };

  render() {
    if (this.context.isLogged) return <Redirect to="/" />;
    return (
      <>
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 my-5">
            <div className="card-body p-0 transparent">
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block justify-content-center">
                  <i className="fas fa-dice-d20 dice-icon mt-5"></i>
                </div>
                <div className="col-lg-7">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h2 mb-4">Welcome!</h1>
                    </div>
                    <form id="loginForm">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="Email"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          autoComplete="username"
                          value={this.state.email}
                          onChange={e => {
                            this.setState({ email: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="Password"
                          placeholder="Password"
                          minLength="5"
                          autoComplete="current-password"
                          value={this.state.pass}
                          onChange={e => {
                            this.setState({ pass: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <p style={{ color: 'red' }}>{this.state.error}</p>
                      <input
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                        onClick={() => {
                          this.loginUser();
                        }}
                        value="Login"
                      />

                      <button
                        id="registerBtn"
                        className="btn btn-success btn-user btn-block"
                        onClick={() => this.props.changeContent('register')}
                      >
                        Create an Account!
                      </button>
                      <button className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Login with
                        Google
                      </button>
                      <button className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </button>
                      <hr className="divider" />
                      <div className="text-center">
                        <span className="small">Forgot Password?</span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginInputs;
