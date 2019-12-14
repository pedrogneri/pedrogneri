import React from 'react'
import './App.css'
import './w3.css'

import Image from './components/Image'
import DescriptionCard from './components/DescriptionCard'
import TechnologiesCard from './components/TechnologiesCard'

function App() {
  return (
    <div className="content">
      <div className="w3-row header-container">
        <Image />
        <DescriptionCard />
      </div>
      <TechnologiesCard />
    </div>
  );
}

export default App;
