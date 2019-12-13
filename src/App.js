import React from 'react'
import './App.css'
import './w3.css'

import Image from './components/Image'
import DescriptionCard from './components/DescriptionCard'
import TechnologiesCard from './components/TechnologiesCard'

function App() {
  return (
    <div className="content">
      <div className="w3-row">
        <div className="w3-half w3-container">
          <Image />
        </div>
        <div className="w3-half w3-container">
          <DescriptionCard />
        </div>
      </div>
     
      <TechnologiesCard />
    </div>
  );
}

export default App;
