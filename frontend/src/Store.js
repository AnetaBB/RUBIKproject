import React from 'react';

export const Context = React.createContext();

export class StoreProvider extends React.Component {
  state = {
    isLogged: localStorage.getItem('token') ? true : false,
    user: '',
    projectID: '',
  };

  changeStore = (name, value) => {
    this.setState({ [name]: value });
    console.log(`Store element: ${name} , value: ${value}`);
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, changeStore: this.changeStore }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
