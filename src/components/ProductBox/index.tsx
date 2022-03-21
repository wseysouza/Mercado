import React from 'react';

import Image from 'next/image';

import { Container, AnchorImage, Title, Value, ValueOld, Save, Logo } from './styles';

export interface productBoxProps {
  key: number;
  url: string;
  title: string;
  value: string;
  valueOld?: string;
  discount?: string;
  exclusiveAppOffer: boolean;
}

export const ProductBox = ({ url, title, value, valueOld, discount, exclusiveAppOffer, key }: productBoxProps) => {
  return (
    <Container key={key}>
      {exclusiveAppOffer && (<Logo src="images/Selo_Mais_Barato.png" alt='selo barato no app' />)}
      <AnchorImage>
        <Image key={key} className="img" src={url} alt={title} layout="fill" />
      </AnchorImage>
      <Title>{title}</Title>
      {discount !== "0,00" ? (<ValueOld>{`R$ ${valueOld}`}</ValueOld>) : (<ValueOld></ValueOld>)}
      <Value>{`R$ ${value}`}</Value>
      {discount !== "0,00" ? (<Save>{`Economize R$ ${discount}`}</Save>) : (<Save></Save>)}
    </Container>
  );
}

