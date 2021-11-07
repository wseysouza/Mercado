import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { Dropdown } from '@components/Dropdown';
import { LinkSimple } from '@components/links/LinkSimple';

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
          <LinkSimple href="/home">Home</LinkSimple>
          <LinkSimple href="/marcapropria">Marca Própria</LinkSimple>
          <LinkSimple href="/institucional">Institucional</LinkSimple>
          <LinkSimple href="/contato">Contato</LinkSimple>
          <LinkSimple href="/lojasmulti">Lojas Multi</LinkSimple>
          <LinkSimple href="/trabalheconosco">Trabalhe Conosco</LinkSimple>
        </InsideLeft>
      </Left>
      <Division />
      <Center>
        <h1>Central Administrativa</h1>
        <InsideCenter>
          <span>(54) 3211-3230</span>
          <LinkSimple href="">Lojas Dúvidas Frequentes</LinkSimple>
          <LinkSimple href="">atendimento@multimercados.com.br</LinkSimple>
          <LinkSimple href="">Termos de Uso</LinkSimple>
          <LinkSimple href="">Marca Políticas de Privacidade</LinkSimple>
        </InsideCenter>
      </Center>
      <Division />
      <Right>
        <h1>Nossos Canais</h1>
        <InsideRight>
          <SocialNetwork>
            <LinkSimple href="https://www.facebook.com/multimercados" target="_blank">
              <FaFacebook size={20} />
            </LinkSimple>
            <LinkSimple href="https://www.instagram.com/redemultimercados" target="_blank">
              <FaInstagram size={20} />
            </LinkSimple>
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
