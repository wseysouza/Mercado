import { Dropdown } from '@components/Dropdown';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import {
  Wrapper,
  Left,
  InsideLeft,
  Division,
  Center,
  InsideCenter,
  Right,
  InsideRight,
  SocialNetwork
} from './styles';

export const RowInfo: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <h1>MultiMercados</h1>
        <InsideLeft>
          <a href="#">Home</a>
          <a href="#">Marca Própria</a>
          <a href="#">Institucional</a>
          <a href="#">Contato</a>
          <a href="#">Lojas Multi</a>
          <a href="#">Trabalhe Conosco</a>
        </InsideLeft>
      </Left>
      <Division />
      <Center>
        <h1>Central Administrativa</h1>
        <InsideCenter>
          <span>(54) 3211-3230</span>
          <a href="#">Lojas Dúvidas Frequentes</a>
          <a href="#">atendimento@multimercados.com.br</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Marca Políticas de Privacidade</a>
        </InsideCenter>
      </Center>
      <Division />
      <Right>
        <h1>Nossos Canais</h1>
        <InsideRight>
          <SocialNetwork>
            <FaFacebook size={20} />
            <FaInstagram size={20} />
          </SocialNetwork>
          <Dropdown label="Encontre uma Loja Multi" items={[
            { id: "0", name: 'Multi Salvador - 54 3222-2343', selected: true },
            { id: "1", name: 'Ketchup', selected: false },
            { id: "2", name: 'Barbecue', selected: false },
          ]} />
        </InsideRight>
      </Right>
    </Wrapper>
  );
};
