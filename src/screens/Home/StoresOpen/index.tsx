import React from 'react';
import { GrClose } from 'react-icons/gr';
import { BsCalendarCheck } from 'react-icons/bs';
import { BiRadioCircle } from 'react-icons/bi';


import { Wrapper, Title, Row, IconCalendar, IconClose } from './styles';

const StoresOpen: React.FC = () => {
  return (
    <Wrapper>
      <IconClose >
        <GrClose />
      </IconClose>

      <IconCalendar>
        <BsCalendarCheck />
      </IconCalendar>

      <Title>
        Lojas abertas aos Domingos
      </Title>

      <Row><BiRadioCircle />Multi Maxi Compra</Row>
      <Row><BiRadioCircle />Multi Lugama</Row>
      <Row><BiRadioCircle />Multi Bianchi</Row>
      <Row><BiRadioCircle />Multi Cazuza</Row>
      <Row><BiRadioCircle />Multi Condor Centro</Row>
      <Row><BiRadioCircle />Multi Condor Moreira</Row>
      <Row><BiRadioCircle />Multi Condor São Leopoldo</Row>
      <Row><BiRadioCircle />Multi Condor São Pelegrino</Row>
    </Wrapper >
  )
}

export default StoresOpen;
