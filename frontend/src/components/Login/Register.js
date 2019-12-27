import React from 'react';
import { Redirect } from 'react-router-dom';
import Store from '../../Store';
import Card from 'react-bootstrap/Card';
import api_rubikproject from '../../api/api_rubikproject';

class Register extends React.Component {
  state = {
    name: '',
    surname: '',
    email: '',
    pass: '',
    re_pass: '',
    error: '',
  };

  static contextType = Store;

  registerUser = async () => {
    try {
      const response = await api_rubikproject.post('/api/users', {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.pass,
        repeat_password: this.state.re_pass,
        active: true,
      });
      if (response.status)
        this.context.isLogged = localStorage.setItem('token', 'wartoscTokena');
      window.location.reload();
    } catch (error) {
      console.log(this.state.name);
      this.setState({ error: 'Nie prawidłowe dane logowania.' });
    }
  };

  render() {
    if (this.context.isLogged) return <Redirect to="/" />;
    return (
      <>
        <Card className=" o-hidden border-0 my-5" style={{ width: '100%' }}>
          <Card.Body className="p-0 transparent">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block justify-content-center">
                <i className="fas fa-dice-d20 dice-icon mt-5"></i>
              </div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 mb-4">Create an Account!</h1>
                  </div>
                  <form>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="First Name"
                          value={this.state.name}
                          onChange={e => {
                            this.setState({ name: e.target.value });
                          }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Last Name"
                          value={this.state.surname}
                          onChange={e => {
                            this.setState({ surname: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                        autoComplete="username"
                        value={this.state.email}
                        onChange={e => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          autoComplete="new-password"
                          value={this.state.pass}
                          onChange={e => {
                            this.setState({ pass: e.target.value });
                          }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                          autoComplete="new-password"
                          value={this.state.re_pass}
                          onChange={e => {
                            this.setState({ re_pass: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <p style={{ color: 'red' }}>{this.state.error}</p>
                    <span
                      className="btn btn-primary btn-user btn-block"
                      onClick={() => {
                        this.registerUser();
                      }}
                    >
                      Register Account
                    </span>
                    <span className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Register with
                      Google
                    </span>
                    <span className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Register with
                      Facebook
                    </span>
                    <hr className="divider" />
                    <div className="text-center">
                      <span className="small">Forgot Password?</span>
                    </div>
                    <div className="text-center">
                      <span className="small">
                        Already have an account? Login!
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Register;
