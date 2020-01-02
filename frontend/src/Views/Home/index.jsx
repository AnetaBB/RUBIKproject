import React from 'react';
import StartDashboard from '../../components/Home/StartDashboard';
import Sidebar from '../../components/Home/Sidebar';
import TopNavbar from '../../components/Home/TopNavbar';
import Milestone from '../../components/Milestones/index';
import AddAMilestone from '../../components/Milestones/AddAMilestone';
import Footer from '../../components/Home/Footer';
import Bugs from '../../components/Bugs/index';
import Project from '../../components/Project/Project';
import Store from '../../Store';
import NewProjectForm from '../../components/Project/NewProjectForm';
import Todo from '../../components/Todo';

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
      return <NewProjectForm changeContent={this.selectContent} />;
    } else if (this.state.content === 'bugs') {
      return <Bugs />;
    } else if (this.state.content === 'milestone') {
      return <Milestone />;
    } else if (this.state.content === 'newMilestone') {
      return <AddAMilestone />;
    } else if (this.state.content === 'bugs') {
      return <Bugs />;
    } else if (this.state.content === 'todo') {
      return <Todo />;
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
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
