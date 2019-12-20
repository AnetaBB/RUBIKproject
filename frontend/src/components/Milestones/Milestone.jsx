import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Milestone extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-7">
          {/* <Card>
            <Card.Header>Header</Card.Header>
            <Card.Img variant="top" src="../../../public/img/milestone.png" />
            <Card.Body>
              <Card.Title>Milestones</Card.Title>
              <Card.Text>
                 Milestones to ba assign to the specific projects.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  this.setState({ content: 'to-do-user' });
                }}
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-5">
          <Card>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Milestone</Card.Title>
              <Card.Text>
                Estimates main milestones to finish your project!
              </Card.Text>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Milestone;
