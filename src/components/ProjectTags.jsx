import React from 'react';
import PropTypes from 'prop-types';

import '../style/ProjectTags.css';

const ProjectTags = ({ projects }) => {
  const listTags = projects.map((project, index) => (
    <span key={index.toString()} className="tag w3-small primary-color-light">
      <a rel="noopener noreferrer" target="_blank" href={project.url}>{project.name}</a>
    </span>
  ));

  return <div className="project-tags">{listTags}</div>;
};

ProjectTags.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string,
      url: PropTypes.string,
    },
  )),
};

ProjectTags.defaultProps = {
  projects: [],
};

export default ProjectTags;
