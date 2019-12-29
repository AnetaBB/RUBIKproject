import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Store';

const ProjectsList = props => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  let context = useContext(Context);

  useEffect(() => {
    let isSubscribed = true;
    fetch(`/api/projects`)
      .then(result => result.json())
      .then(projects => {
        setProjects(projects);
      })
      .catch(error => setError(error));
    return () => isSubscribed = false;
  }, []);

  if (error) {
    return <span className="collapse-item"><p>Something went wrong</p><p>we have an error</p></span>;
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
              props.changeContent('project');
              context.changeStore('projectID', project._id);
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
