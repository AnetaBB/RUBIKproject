import React from 'react';
import Card from 'react-bootstrap/Card';

class ListAllComments extends React.Component {
  state = { usersApi: [] };

  async componentDidMount() {
    const response = await fetch('/api/comments');
    const data = await response.json();
    this.setState({ usersApi: data });
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-7">
          <Card>
            <Card.Header>List of your comments</Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table
                  className="table table-bordered text-gray-300"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>ProjectID</th>
                      <th>Title</th>
                      <th>Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.usersApi.map(function(item) {
                      return (
                        <tr key={item._id}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.comment}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default ListAllComments;
