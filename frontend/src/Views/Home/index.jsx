import React from 'react';
import Sidebar from '../../components/Home/Sidebar';
import TopNavbar from '../../components/Home/TopNavbar';
//import { ReactComponent } from '*.svg';

const Home = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopNavbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
