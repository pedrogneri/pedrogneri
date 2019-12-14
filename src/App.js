import React from 'react'
import './App.css'
import './w3.css'

import Image from './components/Image'
import DescriptionCard from './components/DescriptionCard'
import TechnologiesCard from './components/TechnologiesCard'
import SocialMedias from './components/SocialMedias'

function App() {
  return (
    <div className="content">
      <div className="w3-row header-container">
        <Image />
        <DescriptionCard />
        <SocialMedias />
      </div>
      <TechnologiesCard />
    </div>
  );
}

export default App;
