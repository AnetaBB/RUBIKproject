import React from 'react';
import Sidebar from '../../components/Home/Sidebar';
import TopNavbar from '../../components/Home/TopNavbar';
import ExampleCard1 from '../../components/Home/ExampleCard1';
//import { ReactComponent } from '*.svg';

class Home extends React.Component {
  state = { content: '', myApi: ['raz', 'dwa'] };

  selectContent = wartosc => {
    this.setState({ content: wartosc });
  };

  renderContent() {
    if (this.state.content === 'project') {
      return <ExampleCard1 />;
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(result => this.setState({ myApi: result[0].title }));
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
                {this.renderContent()} {this.state.myApi}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
