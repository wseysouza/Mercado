import { HeaderTab } from '@components/HeaderTab';
import React from 'react';

import { Container } from './styles';

const institucional: React.FC = () => {
  return (
    <Container>
      <HeaderTab title="institucional" />
      <main>
        <h1>institucional</h1>
      </main>
    </Container>
  );
}

export default institucional;
