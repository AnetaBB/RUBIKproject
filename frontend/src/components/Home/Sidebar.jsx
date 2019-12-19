import React from 'react';

function Sidebar({ changeContent }) {
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
          <span className="nav-link" href="main.html">
            <i className="fas fa-fw fa-home"></i>
            <span>Dashboard</span>
          </span>
        </li>

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <span
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Projects</span>
          </span>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-gray-800 py-2 collapse-inner rounded">
              <h6 className="collapse-header">My projects:</h6>
              <span
                id="project1"
                className="collapse-item"
                onClick={() => changeContent('project')}
              >
                Project #1
              </span>
              <span className="collapse-item">Project #2</span>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <span
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseThird"
            aria-expanded="true"
            aria-controls="collapseThird"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Bugs</span>
          </span>
          <div
            id="collapseThird"
            className="collapse"
            aria-labelledby="headingThird"
            data-parent="#accordionSidebar"
          >
            <div className="bg-gray-800 py-2 collapse-inner rounded">
              <span
                id="project1"
                className="collapse-item" >
                Add ticket
              </span>
              <span className="collapse-item">View all</span>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <span className="nav-link">
            <i className="fas fa-fw fa-tasks"></i>
            <span>Tasks</span>
          </span>
        </li>

        <div className="sidebar-heading">Addons</div>

        <li className="nav-item">
          <span
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTemplates"
            aria-expanded="true"
            aria-controls="collapseTemplates"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Templates</span>
          </span>
          <div
            id="collapseTemplates"
            className="collapse"
            aria-labelledby="headingTemplates"
            data-parent="#accordionSidebar"
          >
            <div className="bg-gray-800 py-2 collapse-inner rounded">
              <h6 className="collapse-header">Templates:</h6>
              <span className="collapse-item" href="tables.html">
                Table
              </span>
              <span className="collapse-item" href="progress-bar.html">
                Progess bars
              </span>
              <span className="collapse-item" href="input-fields.html">
                Input fields
              </span>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <span className="nav-link">
            <i className="fas fa-fw fa-plus"></i>
            <span>New project</span>
          </span>
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

export default Sidebar;
