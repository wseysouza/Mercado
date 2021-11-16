import React, { ReactElement } from 'react';

import { Wrapper, Content } from './styles';

interface LinkProps {
  href: string;
  target?: string;
  children?: string | ReactElement;
}

export const LinkSimple = ({ href, target, children }: LinkProps) => {
  return (
    <Wrapper href={href} passHref>
      <Content target={target}>
        {children}
      </Content>
    </Wrapper>
  );
};
