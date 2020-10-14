import React from 'react';

import { Container, SocialMedia } from './styles';

import github from '../../assets/github-icon.svg';
import linkedin from '../../assets/linkedin-icon.svg';
import email from '../../assets/email-icon.svg';

const SocialMedias = () => {
  return (
    <Container>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/pedrogneri/">
        <SocialMedia className="social-media" src={github} alt="github" />
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/pedrogneri/">
        <SocialMedia className="social-media" src={linkedin} alt="linkedin" />
      </a>
      <a rel="noopener noreferrer" target="_blank" href="mailto:pedrogneri@gmail.com">
        <SocialMedia className="social-media" src={email} alt="email" />
      </a>
    </Container>
  );
};

export default SocialMedias;