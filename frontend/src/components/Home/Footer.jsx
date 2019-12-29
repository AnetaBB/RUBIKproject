import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="sticky-footer">
          <div className="container my-auto">
            <div className="copyright text-center text-gray-300 my-auto">
              <span>Copyright &copy; RUBIK project 2019</span>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
