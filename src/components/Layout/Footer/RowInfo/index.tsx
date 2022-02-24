import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

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

import { useMulti } from "@hooks/multi";



export const RowInfo: React.FC = () => {

  const { getListParameterSite, parameterSite } = useMulti();

  useEffect(() => {
    getListParameterSite();
  }, [])

  return (
    <>
      {parameterSite && (<Wrapper>
        <Left>
          <h1>MultiMercados</h1>
          <InsideLeft>
            <LinkSimple href="/home#main">Home</LinkSimple>
            <LinkSimple href="/marcapropria#main">Marca Própria</LinkSimple>
            <LinkSimple href="/institucional#main">Institucional</LinkSimple>
            <LinkSimple href="/contato#main">Contato</LinkSimple>
            <LinkSimple href="/lojasmulti#main">Lojas Multi</LinkSimple>
            <LinkSimple href={parameterSite.url_trabalheconosco} target="_blank">Trabalhe Conosco</LinkSimple>
          </InsideLeft>
        </Left>
        <Division />
        <Center>
          <h1>Central Administrativa</h1>
          <InsideCenter>
            <LinkSimple href={`tel:(${parameterSite.fone_ddd}) ${parameterSite.fone_numero}`}>{`(${parameterSite.fone_ddd}) ${parameterSite.fone_numero}`}</LinkSimple>
            <LinkSimple >Políticas de Privacidade</LinkSimple>
            <LinkSimple href={`mailto:(${parameterSite.email})`}>{parameterSite.email}</LinkSimple>
            <LinkSimple >Termos de Uso</LinkSimple>
          </InsideCenter>
        </Center>
        <Division />
        <Right>
          <h1>Nossos Canais</h1>
          <InsideRight>
            <SocialNetwork>
              <LinkSimple href={parameterSite.facebook} target="_blank">
                <FaFacebook size={20} />
              </LinkSimple>
              <LinkSimple href={parameterSite.instagram} target="_blank">
                <FaInstagram size={20} />
              </LinkSimple>
            </SocialNetwork>
            < DropdownRowInfoAndContato label="Encontre uma Loja Multi" colorLabel={colors.white} />
          </InsideRight>
        </Right>
      </Wrapper >)}
    </>
  );
};
