import React from 'react';
import Card from 'react-bootstrap/Card';

class Users extends React.Component {
  state = { myApi: [] };

  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/users')
      .then(res => res.json())
      .then(
        data => this.setState({ myApi: data[0].name })
        //this.setState(prevState => ({ myApi: [prevState.push(data)] }))
        //console.log(data);
      );
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-7">
          <Card>
            <Card.Header>List of users</Card.Header>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>{this.state.myApi}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-5">
          <Card>
            <Card.Header>Detail User</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Users;
