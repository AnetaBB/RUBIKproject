import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api_rubikproject from '../../api/api_rubikproject';

const AddComment = props => {
  const [validated, setValidated] = useState(false);

  /* to wstawiłam sama, bo tak mi się wydaje, nie wiem gdzie i czy to wywołać */
  // const [status, setStatus] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  // ustalam setStatus za pomocą enum w typescript
  //   enum Status {
  //       public,
  //       private
  //   };
  //     const Status;
  //    (function (Status) {
  //     Status[Status["Public"] = 0] = "Public";
  //     Status[Status["Private"] = 1] = "Private";
  // })(Status || (Status = {}));

  const handleSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log('Formularz zawiera błędy');
    }

    setValidated(true);

    if (title.length > 2) {
      try {
        let data = {
          title: title,
          description: description,
          owner: 'Aneta', //todo: add owner from context.me
          status: 'Private',
        };
        let response = await api_rubikproject.post('/api/comments', data);
        if (response.status === 200) {
          //         // context.changeStore('projectID', response.data);
          props.changeContent('comment');
        } else {
          console.log(response.body);
          setError('Failure: ' + response.body); //TODO
        }
      } catch (error) {
        //TODO if response is 409 it is handled here (display new component ContentError)
        setError('catch: ' + error.message); //TODO
        // setError(error);
        console.log('2:', error);
        //       // alert(error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Leave a comment</h2>
              
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="CommentTitle">
          <Form.Label>Comment Title</Form.Label>            
          <Form.Control
            minLength="5"
            required
            type="text"
            placeholder="Insert title of your comment"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
           
          <Form.Control.Feedback type="invalid">
            Something is missing from your comment...       
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="CommentContent">
          <Form.Label>Comment</Form.Label>            
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Here U can leave your comment"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Button type="cancel">Cancel</Button> 
      </Form>
      <div>{error && `${error}`}</div> 
    </div>
  );
};

export default AddComment;
