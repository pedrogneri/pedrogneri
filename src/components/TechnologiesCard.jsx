import React from 'react';

import '../style/TechnologiesCard.css';

import TechnologyItem from './TechnologyItem';
import technologies from '../data/technologies.json';

const TechnologiesCard = () => {
  const technologyList = technologies.map((technology, index) => (
    <TechnologyItem key={index.toString()} technology={technology} />
  ));

  return (
    <div className="w3-margin-top">
      <header className="w3-container round-border-top primary-color">
        <h3>Tecnologias</h3>
      </header>

      <div className="w3-container round-border-bottom w3-padding-16 secondary-color">
        <div className="technologies-container">{technologyList}</div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
