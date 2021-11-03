import { Dropdown } from '@components/Dropdown';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

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
          <Link href="home">
            <a >Home</a>
          </Link>

          <Link href="marcapropria">
            <a >Marca Própria</a>
          </Link>

          <Link href="institucional">
            <a >Institucional</a>
          </Link>

          <Link href="contato">
            <a >Contato</a>
          </Link>

          <Link href="lojasmulti">
            <a >Lojas Multi</a>
          </Link>

          <Link href="trabalheconosco">
            <a >Trabalhe Conosco</a>
          </Link>
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
            <a href="https://www.facebook.com/multimercados" target="_blank">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/redemultimercados" target="_blank">
              <FaInstagram size={20} />
            </a>
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
