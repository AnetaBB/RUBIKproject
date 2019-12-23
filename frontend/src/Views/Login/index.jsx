import React from 'react';
import TopNavbarLogin from '../../components/Login/TopNavbarLogin';
import RegisterOrLogin from '../../components/Login/RegisterOrLogin';

class Login extends React.Component {
  render() {
    return (
      <>
        <TopNavbarLogin />
        <div id="main" className="container h-100 top-bottom-margin">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                Become a part of
                <br />
                <span className="rubik-project">Rubik project</span>
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">
                Click button below and make yours dreams come true!
              </p>
              <button id="startBtn" className="btn btn-primary btn-lg">
                Let`s start
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
