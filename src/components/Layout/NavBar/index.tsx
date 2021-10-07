import React from 'react';

import { Tab } from '@components/Layout/NavBar/Tab';
import { Wrapper } from './styles';

export const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <Tab href="/home" name="Home" active />
      <Tab href="/institucional" name="institucional" />
      <Tab href="/lojasmulti" name="Lojas Multi" />
      <a href="/home">
        <img src="images/logo_big.png" alt="Italian Trulli" width="137px" />
      </a>
      <Tab href="/marcapropria" name="Marca Própria" />
      <Tab href="/contato" name="Contato" />
      <Tab href="/trabalheconosco" name="Trabalhe Conosco" />
    </Wrapper>
  );
}
