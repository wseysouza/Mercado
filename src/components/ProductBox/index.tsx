import React from 'react';

import Image from 'next/image';


import { Container, AnchorImage, Title, Value } from './styles';

export interface productBoxProps {
  url: string;
  title: string;
  value: string;
}

export const ProductBox = ({ url, title, value }: productBoxProps) => {
  return (
    <Container>
      <AnchorImage>
        <Image className="img" src={url} alt={title} layout='fill' />
      </AnchorImage>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
}

