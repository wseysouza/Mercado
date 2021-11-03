import React from 'react';
import { GrClose } from 'react-icons/gr';
import { BsCalendarCheck } from 'react-icons/bs';


import { Wrapper, Title, Row, IconCalendar, IconClose } from './styles';

const StoresOpen: React.FC = () => {
  return (
    <Wrapper>
      <IconClose>
        <GrClose />
      </IconClose>

      <IconCalendar>
        <BsCalendarCheck />
      </IconCalendar>

      <Title>
        Lojas abertas aos Domingos
      </Title>
      <Row>Multi Maxi Compra</Row>
      <Row>Multi Lugama</Row>
      <Row>Multi Bianchi</Row>
      <Row>Multi Cazuza</Row>
      <Row>Multi Condor Centro</Row>
      <Row>Multi Condor Moreira</Row>
      <Row>Multi Condor São Leopoldo</Row>
      <Row>Multi Condor São Pelegrino</Row>
    </Wrapper>
  )
}

export default StoresOpen;
