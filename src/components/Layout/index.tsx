import React from 'react';
import { Footer } from './Footer';
import { NavBar } from './NavBar';

import { Wrapper } from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </Wrapper>
  );
};
