import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
// import { ButtonDefault } from '../buttons/ButtonDefault';

import { Wrapper, Content, Body } from './styles';

interface ModalProps {
  show: boolean;
  onHide: () => void;
  children: string | React.ReactElement;
}

export const Modal = ({ show, onHide, children }: ModalProps) => (
  <Wrapper show={show}>
    <Content show={show}>

      <Body>
        {children}
      </Body>
    </Content>
  </Wrapper>
);
