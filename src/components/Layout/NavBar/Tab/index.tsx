import React from 'react';
import { Wrapper } from './styles';

interface TabProps {
  name: string;
  href: string;
  active?: boolean;
}

export const Tab = ({ name, href, active = false }: TabProps) => {
  return (
    <Wrapper href={href} active={active}>
      {name}
      <span />
    </Wrapper>
  );
}
