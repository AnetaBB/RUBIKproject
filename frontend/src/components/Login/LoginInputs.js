import React from 'react';
import Store from '../../Store';
import { Redirect } from 'react-router-dom';
import api_rubikproject from '../../api/api_rubikproject';

class LoginInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    };
  }

  static contextType = Store;

  loginUser = async () => {
    try {
      const response = await api_rubikproject.post('/api/login', {
        email: 'tomek7@gmail.com',
        password: 'qweasd',
      });
      console.log(response);
      if (response.status)
        this.context.isLogged = localStorage.setItem('token', 'wartoscTokena');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
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

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary btn-user btn-block"
                      onClick={() => {
                        this.loginUser();
                      }}
                    >
                      Login
                    </button>
                    <button
                      id="registerBtn"
                      className="btn btn-success btn-user btn-block"
                      onClick={() => this.props.changeContent('register')}
                    >
                      Create an Account!
                    </button>
                    <button className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Login with Google
                    </button>
                    <button className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Login with
                      Facebook
                    </button>
                    <hr className="divider" />
                    <div className="text-center">
                      <span className="small">Forgot Password?</span>
                    </div>
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
