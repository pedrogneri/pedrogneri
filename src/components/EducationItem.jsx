import React from 'react';
import PropTypes from 'prop-types';

const EducationItem = ({ educationItem }) => (
  <div className="w3-container w3-row w3-padding-16">
    <div className="w3-container w3-half w3-margin-bottom">
      <span className="title"><b>{educationItem.name}</b></span>
      <br />
      <span className="description">{educationItem.graduation}</span>
      <br />
      <span className="description"><i>{educationItem.duration}</i></span>
    </div>
    <div className="w3-container w3-rest">
      <span className="description">{educationItem.description}</span>
    </div>
  </div>
);

EducationItem.propTypes = {
  educationItem: PropTypes.shape({
    name: PropTypes.string,
    graduation: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
  }),
};

EducationItem.defaultProps = {
  educationItem: {},
};

export default EducationItem;
