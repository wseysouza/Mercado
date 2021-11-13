import React from 'react';
import Link from 'next/link';

import { BiRadioCircle } from 'react-icons/bi';


import { Wrapper, Title, Row, IconCalendar, IconClose } from './styles';

export const StoresOpen: React.FC = () => {
  return (
    <Wrapper>
      <Title>Lojas abertas aos Domingos</Title>
      <Link href="/lojasmulti">
        <Row ><BiRadioCircle />Multi Maxi Compra</Row>
      </Link>
      <Link href="/lojasmulti">
        <Row><BiRadioCircle />Multi Lugama</Row>
      </Link>
      <Link href="/lojasmulti">
        <Row><BiRadioCircle />Multi Bianchi</Row>
      </Link>
      <Link href="/lojasmulti">
        <Row><BiRadioCircle />Multi Cazuza</Row>
      </Link>
      <Link href="/lojasmulti">
        <Row><BiRadioCircle />Multi Condor Centro</Row>
      </Link>
      <Link href="/lojasmulti">
        <Row><BiRadioCircle />Multi Condor Moreira</Row>
      </Link>
      <Link href="/lojasmulti">
        <Row><BiRadioCircle />Multi Condor São Leopoldo</Row>
      </Link>
      <Link href="/lojasmulti">
        <Row><BiRadioCircle />Multi Condor São Pelegrino</Row>
      </Link>
    </Wrapper >
  )
}
