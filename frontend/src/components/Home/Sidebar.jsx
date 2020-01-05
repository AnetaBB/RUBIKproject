import React from 'react';
import ProjectsList from '../../components/Project/ProjectsList';
import CreateNewProjectForm from '../Project/CreateNewProjectForm';

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
            <span onClick={() => changeContent('')}>Dashboard</span>
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

              <CreateNewProjectForm changeContent={changeContent} />
              <ProjectsList changeContent={changeContent} />
            </div>
          </div>
        </li>

        <li className="nav-item">
          <span
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseBugs"
            aria-expanded="true"
            aria-controls="collapseBugs"
          >
            <i className="fas fa-fw fa-bug"></i>
            <span>Bugs</span>
          </span>
          <div
            id="collapseBugs"
            className="collapse"
            aria-labelledby="headingBugs"
            data-parent="#accordionSidebar"
          >
            <div className="bg-gray-800 py-2 collapse-inner rounded">
              <span
                className="collapse-item"
                onClick={() => changeContent('viewAllBugs')}
              >
                View all
              </span>
              <span
                id="project1"
                className="collapse-item"
                onClick={() => changeContent('addBug')}
              >
                Add ticket
              </span>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <span
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseSubticket"
            aria-expanded="true"
            aria-controls="collapseSubticket"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Subtickets</span>
          </span>
          <div
            id="collapseSubticket"
            className="collapse"
            aria-labelledby="headingSubticket"
            data-parent="#accordionSidebar"
          >
            <div className="bg-gray-800 py-2 collapse-inner rounded">
              <span
                className="collapse-item"
                onClick={() => changeContent('viewAllSubTickets')}
              >
                View all
              </span>
              <span
                className="collapse-item"
                onClick={() => changeContent('addSubTicket')}
              >
                Add subticket
              </span>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <span className="nav-link">
            <i className="fas fa-fw fa-tasks"></i>
            <span>Tasks</span>
          </span>
        </li>

        <li className="nav-item">
          <span
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseMilestones"
            aria-expanded="true"
            aria-controls="collapseMilestones"
          >
            <i className="fas fa-fw fa-list"></i>
            <span>Milestones</span>
          </span>
          <div
            id="collapseMilestones"
            className="collapse"
            aria-labelledby="headingMilestone"
            data-parent="#accordionSidebar"
          >
            <div className="bg-gray-800 py-2 collapse-inner rounded">
              <h6 className="collapse-header">My milestones:</h6>
              <span
                id="project1"
                className="collapse-item"
                onClick={() => changeContent('milestone')}
              >
                Show milestones
              </span>
              <span
                className="collapse-item"
                onClick={() => {
                  changeContent('newMilestone');
                }}
              >
                + Add new milestone
              </span>
            </div>
          </div>
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
