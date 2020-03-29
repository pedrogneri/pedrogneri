import React from 'react';

import '../style/SocialMedias.css';

import github from '../assets/github-icon.svg';
import linkedin from '../assets/linkedin-icon.svg';
import email from '../assets/email-icon.svg';

const SocialMedias = () => (
  <div className="social-medias w3-margin-top">
    <a rel="noopener noreferrer" target="_blank" href="https://github.com/pedrogneri/"><img className="social-media" src={github} alt="github" /></a>
    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/pedrogneri/"><img className="social-media" src={linkedin} alt="linkedin" /></a>
    <a rel="noopener noreferrer" target="_blank" href="mailto:pedrogneri@gmail.com"><img className="social-media" src={email} alt="email" /></a>
  </div>
);

export default SocialMedias;
