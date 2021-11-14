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
import DropdownRowInfoAndContato from '@components/DropdownRowInfoAndContato';
import { colors } from '@styles/colors';

export const RowInfo: React.FC = () => {

  return (
    <Wrapper>
      <Left>
        <h1>MultiMercados</h1>
        <InsideLeft>
          <LinkSimple href="/home#main">Home</LinkSimple>
          <LinkSimple href="/marcapropria#main">Marca Própria</LinkSimple>
          <LinkSimple href="/institucional#main">Institucional</LinkSimple>
          <LinkSimple href="/contato#main">Contato</LinkSimple>
          <LinkSimple href="/lojasmulti#main">Lojas Multi</LinkSimple>
          <LinkSimple href="https://kretos.cc" target="_blank">Trabalhe Conosco</LinkSimple>
        </InsideLeft>
      </Left>
      <Division />
      <Center>
        <h1>Central Administrativa</h1>
        <InsideCenter>
          <LinkSimple href="tel:(54) 3211-3230">(54) 3211-3230</LinkSimple>
          <LinkSimple target="_blank" href="https://repos.multimercados.com.br/html/politica-de-privacidade.html">Políticas de Privacidade</LinkSimple>
          <LinkSimple href="mailto:atendimento@multimercados.com.br">atendimento@multimercados.com.br</LinkSimple>
          <LinkSimple target="_blank" href="https://repos.multimercados.com.br/html/termo-de-uso.html">Termos de Uso</LinkSimple>
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
          < DropdownRowInfoAndContato label="Encontre uma Loja Multi" colorLabel={colors.white} />
        </InsideRight>
      </Right>
    </Wrapper >
  );
};
