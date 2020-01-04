import React from 'react';
import Store from '../../Store';
import api_rubikproject from '../../api/api_rubikproject';

class StartDashboard extends React.Component {
  static contextType = Store;

  async componentDidMount() {
    try {
      const response = await api_rubikproject.get(
        `/api/users/${localStorage.getItem('rubikproject_user')}`
      );

      if (response.status) {
        const userData = JSON.parse(response.request.response);
        this.context.changeStore('user', userData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <h1>Good morning, {this.context.user.name}</h1>;
  }
}

export default StartDashboard;
