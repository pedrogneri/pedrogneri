import React from 'react';
import './style/App.css';
import './style/Fonts.css';
import './style/w3.css';

import Image from './components/Image';
import DescriptionCard from './components/DescriptionCard';
import TechnologiesCard from './components/TechnologiesCard';
import SocialMedias from './components/SocialMedias';
import Education from './components/Education';
import Footer from './components/Footer';

const App = () => (
  <div className="content">
    <div className="w3-row w3-center">
      <Image />
      <DescriptionCard />
      <SocialMedias />
    </div>
    <TechnologiesCard />
    <Education />
    <Footer />
  </div>
);

export default App;
