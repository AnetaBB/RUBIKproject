import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <ul
          className="navbar-nav bg-gray-900 sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <span className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-dice-d20"></i>
            </div>
            <div className="sidebar-brand-text mx-2">
              <span className="rubik-project">
                <span>
                  <b>RUBIK</b>
                </span>
                project
              </span>
            </div>
          </span>

          <li className="nav-item active">
            <a className="nav-link" href="main.html">
              <i className="fas fa-fw fa-home"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <div className="sidebar-heading">Interface</div>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-cog"></i>
              <span>Projects</span>
            </a>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-gray-800 py-2 collapse-inner rounded">
                <h6 className="collapse-header">My projects:</h6>
                <span id="project1" className="collapse-item">
                  Project #1
                </span>
                <a className="collapse-item" href="#">
                  Project #2
                </a>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="bugs.html">
              <i className="fas fa-fw fa-bug"></i>
              <span>Bugs</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tasks"></i>
              <span>Tasks</span>
            </a>
          </li>

          <div className="sidebar-heading">Addons</div>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTemplates"
              aria-expanded="true"
              aria-controls="collapseTemplates"
            >
              <i className="fas fa-fw fa-folder"></i>
              <span>Templates</span>
            </a>
            <div
              id="collapseTemplates"
              className="collapse"
              aria-labelledby="headingTemplates"
              data-parent="#accordionSidebar"
            >
              <div className="bg-gray-800 py-2 collapse-inner rounded">
                <h6 className="collapse-header">Templates:</h6>
                <a className="collapse-item" href="tables.html">
                  Table
                </a>
                <a className="collapse-item" href="progress-bar.html">
                  Progess bars
                </a>
                <a className="collapse-item" href="input-fields.html">
                  Input fields
                </a>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-plus"></i>
              <span>New project</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-book"></i>
              <span>Documentation</span>
            </a>
          </li>

          {/*<div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle">
                <i className="fas fa-arrow-left"></i>
              </button>
    </div>*/}
        </ul>
      </>
    );
  }
}

export default Sidebar;
