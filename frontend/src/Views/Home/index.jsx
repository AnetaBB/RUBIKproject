import React from 'react';
import StartDashboard from '../../components/Home/StartDashboard';
import Sidebar from '../../components/Home/Sidebar';
import TopNavbar from '../../components/Home/TopNavbar';
import Bugs from '../../components/Bugs/index';
import Project from '../../components/Project/Project';
import Store from '../../Store';
import NewProjectForm from "../../components/Project/NewProjectForm";

//import { ReactComponent } from '*.svg';

class Home extends React.Component {
  state = { content: '' };

  static contextType = Store;

  selectContent = value => {
    this.setState({ content: value });
  };

  renderContent() {
    if (this.state.content === 'project') {
      return <Project />;
    } else if (this.state.content === 'newProject') {
      return <NewProjectForm />;
    } else if (this.state.content === 'bugs') {
      return <Bugs />;
    } else return <StartDashboard />;
  }

  render() {
    return (
      <>
        <div id="wrapper">
          <Sidebar changeContent={this.selectContent} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopNavbar />
              <div className="container-fluid">{this.renderContent()}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
