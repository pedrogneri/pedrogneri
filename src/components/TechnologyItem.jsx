import React from 'react';
import PropTypes from 'prop-types';

import ProjectTags from './ProjectTags';

const TechnologyItem = ({ technology }) => (
  <div className="w3-bar technology-item">
    <span className="title">{technology.name}</span>
    <span className="technology-desc description">{technology.description}</span>
    <ProjectTags projects={technology.projects} />
  </div>
);

TechnologyItem.propTypes = {
  technology: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    projects: PropTypes.array,
  }),
};

TechnologyItem.defaultProps = {
  technology: {},
};

export default TechnologyItem;
