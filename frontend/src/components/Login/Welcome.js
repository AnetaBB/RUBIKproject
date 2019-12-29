import React from 'react';
import Store from '../../Store';
import { Redirect } from 'react-router-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    };
  }

  static contextType = Store;

  render() {
    if (this.context.isLogged) return <Redirect to="/" />;
    return (
      <>
        <div className="col-lg-10 align-self-end">
          <h1 className="text-uppercase text-white font-weight-bold">
            Become a part of
            <br />
            <span className="rubik-project">Rubik project</span>
          </h1>
          <hr className="divider my-4" />
        </div>
        <div className="col-lg-8 align-self-baseline">
          <p className="text-white-75 font-weight-light mb-5">
            Click button below and make yours dreams come true!
          </p>
          <button
            id="startBtn"
            className="btn btn-primary btn-lg"
            onClick={() => this.props.changeContent('login')}
          >
            Let`s start
          </button>
        </div>
      </>
    );
  }
}

export default Welcome;
