import React from 'react';

import Image from '../Image';
import SocialMedias from '../SocialMedias';

import { Container, Description, Subtitle } from './styles';

const Home = () => (
  <Container>
    <Image />
    <Description>
      <h1>Pedro Guilherme Neri</h1>
      <Subtitle>Dev frontend na dextra</Subtitle>
    </Description>
    <SocialMedias />
  </Container>
);

export default Home;
