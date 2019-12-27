import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Store';

const ProjectsList = props => {
  const [projects, setProjects] = useState([]);

  let context = useContext(Context);

  useEffect(() => {
    fetch(`http://localhost:8080/api/projects`)
      .then(result => result.json())
      .then(projects => {
        setProjects(projects);
      });
  });

  return projects.map(project => {
    return (
      <span
        key={project._id}
        id={project._id}
        className="collapse-item"
        onClick={() => {
          context.changeStore('projectID', project._id);
          props.changeContent('project');
        }}
      >
        {project.title}
      </span>
    );
  });
};

export default ProjectsList;
