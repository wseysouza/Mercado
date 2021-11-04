import React from 'react';
import Link from 'next/link';

import { Wrapper } from './styles';


interface TabProps {
  name: string;
  href: string;
  active?: boolean;
}

export const Tab = ({ name, href, active }: TabProps) => {
  return (
    <Link href={href} >
      <Wrapper active={active}>
        {name}
        <span />
      </Wrapper>
    </Link>
  );
}
