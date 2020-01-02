import React from 'react';

const CreateNewProjectForm = (props) => {
  return (
    <span className="collapse-item"
          onClick={() => { props.changeContent('newProject') }}
    >
      + Add new project
    </span>
  )
};

export default CreateNewProjectForm;
