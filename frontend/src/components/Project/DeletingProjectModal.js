import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import api_rubikproject from '../../api/api_rubikproject';
import { Context } from '../../Store';

function DeletingProjectModal(props) {
  const [show, setShow] = useState(true);

  const context = useContext(Context);

  const handleClose = () => setShow(false);

  const deleteProject = async () => {
    const result = await api_rubikproject.put(
      `/api/projects/${context.projectID}`,
      { active: false }
    );
    if (result.status === 200) {
      context.changeStore('projectID', '');
      handleClose();
      props.changeContent('');
    }
  };

  return (
    <Modal
      style={{ color: '#212529' }}
      show={show}
      onHide={handleClose}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete project</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this project?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="primary" onClick={deleteProject}>
          Yes, I'm sure
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletingProjectModal;
