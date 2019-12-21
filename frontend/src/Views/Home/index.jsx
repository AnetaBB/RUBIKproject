import React from 'react';
import Sidebar from '../../components/Home/Sidebar';
import TopNavbar from '../../components/Home/TopNavbar';
import ExampleCard1 from '../../components/Home/ExampleCard1';
import Users from '../../components/Users/index';
//import { ReactComponent } from '*.svg';

class Home extends React.Component {
  state = { content: '' };

  selectContent = wartosc => {
    this.setState({ content: wartosc });
  };

  renderContent() {
    if (this.state.content === 'project') {
      return <ExampleCard1 />;
    } else if (this.state.content === 'users') {
      return <Users />
    } else return <h1>Dashboard</h1>;
  }

  render() {
    return (
      <>
        <div id="wrapper">
          <Sidebar changeContent={this.selectContent} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopNavbar />
              <div className="container-fluid">
                {this.renderContent()}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
