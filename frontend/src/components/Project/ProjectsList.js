import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Store';

const ProjectsList = props => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  let context = useContext(Context);

  useEffect(() => {
    fetch(`/api/projects`)
      .then(result => result.json())
      .then(projects => {
        setProjects(projects);
      })
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <span>{error.toString()}</span>;
  } else {
    return (
      projects &&
      projects.map(project => {
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
      })
    );
  }
};

export default ProjectsList;
