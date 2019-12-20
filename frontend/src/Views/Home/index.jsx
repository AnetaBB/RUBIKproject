import React from 'react';
import Sidebar from '../../components/Home/Sidebar';
import TopNavbar from '../../components/Home/TopNavbar';
import ExampleCard1 from '../../components/Home/ExampleCard1';
//import { ReactComponent } from '*.svg';

class Home extends React.Component {
  state = { content: '', myApi: [] };

  selectContent = wartosc => {
    this.setState({ content: wartosc });
  };

  renderContent() {
    if (this.state.content === 'project') {
      return <ExampleCard1 />;
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/users')
      .then(res => res.json())
      .then(data =>
        //this.setState(prevState => ({ myApi: [prevState.push(data)] }))
        console.log(data)
      );
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
                {this.state.myApi}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
