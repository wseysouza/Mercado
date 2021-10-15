import React from 'react';

import { Container, Image, Title, Value } from './styles';

export interface productBoxProps {
  url: string;
  title: string;
  value: string;
}

export const ProductBox = ({ url, title, value }: productBoxProps) => {
  return (
    <Container>
      <Image src={url} alt={title} />
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
}

