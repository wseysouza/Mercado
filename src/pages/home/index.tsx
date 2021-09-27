import { Header } from '@components/Header';
import React from 'react';

import { Container } from './styles';

const home: React.FC = () => {
  return (
    <Container>
      <Header title="Home" />
      <main>
        <h1>Home</h1>
      </main>
    </Container>
  );
}

export default home;
