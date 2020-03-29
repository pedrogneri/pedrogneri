import React from 'react';

import '../style/DescriptionCard.css';

const DescriptionCard = () => (
  <div className="w3-rest w3-container description-card">
    <header className="w3-container main-name">
      <h3>Pedro Guilherme Neri</h3>
    </header>
    <div className="w3-container description main-description">
      <p>Estagiário na Dextra e estudante de Gestão em TI na Fatec Campinas</p>
    </div>
  </div>
);

export default DescriptionCard;
