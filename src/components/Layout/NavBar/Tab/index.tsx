import React from 'react';
import Link from 'next/link';

import { Wrapper } from './styles';


interface TabProps {
  name: string;
  href?: string;
  active?: boolean;
  workWithUs?: string;
  target?: string;
}

export const Tab = ({ name, href, active, workWithUs, target }: TabProps) => {
  // console.log("LinKK",)
  return (
    <Link href={href} scroll>
      <Wrapper href={workWithUs} active={active} target={target}>
        {name}
        <span />
      </Wrapper>
    </Link>
  );
}
