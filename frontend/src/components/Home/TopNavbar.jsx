import React from 'react';

class TopNavbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand navbar-light bg-gray-800 topbar mb-4 static-top shadow">
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </>
    );
  }
}

export default TopNavbar;
