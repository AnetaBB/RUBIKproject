import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ExampleCard1 extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
    );
  }
}

export default ExampleCard1;
