import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Store';
import api_rubikproject from '../../api/api_rubikproject';
const ProjectsList = props => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  let context = useContext(Context);
  useEffect(() => {
    let isSubscribed = true;
    const fetchProjects = async () => {
      try {
        const response = await api_rubikproject.get(
          `/api/projects?ownerID=${context.user._id}`
        );
        if (response.status === 200) {
          const r = await response.data;
          if (isSubscribed) setProjects(r);
        }
      } catch (error) {
        if (isSubscribed) setError(error);
      }
    };
    fetchProjects();
  }, [context.projectID, context.user._id]);
  if (error) {
    return (
      <span className="collapse-item">
        <p>Error</p>
      </span>
    );
  } else {
    return projects.map(project => {
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
    });
  }
};
export default ProjectsList;
