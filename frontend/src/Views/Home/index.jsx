import React from 'react';
import Sidebar from '../../components/Home/Sidebar';
import TopNavbar from '../../components/Home/TopNavbar';
import ExampleCard1 from '../../components/Home/ExampleCard1';
//import { ReactComponent } from '*.svg';

class Home extends React.Component {
  state = { content: '' };

  selectContent = wartosc => {
    console.log(typeof wartosc);
    this.setState({ content: wartosc });
    console.log(this.state.content);
  };

  renderContent() {
    console.log('123');
    if (this.state.content === 'project') {
      console.log('w srodku');
      return <ExampleCard1 />;
    }
  }

  render() {
    return (
      <>
        <div id="wrapper">
          <Sidebar mojaFunkcja={this.selectContent} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopNavbar />
              {this.renderContent()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
