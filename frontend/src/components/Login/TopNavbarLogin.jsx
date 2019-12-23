import React from 'react';

class TopNavbarLogin extends React.Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top py-3"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <span className="rubik-project" style={{ fontSize: '46px' }}>
                <span style={{ fontSize: '105%' }}>
                  <b>RUBIK</b>
                </span>
                project
              </span>
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default TopNavbarLogin;
