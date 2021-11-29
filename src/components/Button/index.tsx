import React from 'react';

import { Wrapper } from './styles';

interface ButtonProps {
  type: 'button' | 'submit';
  title: string;
  backgroundColor?: string;
  titleColor?: string;
}

export const Button = ({ type, title, backgroundColor, titleColor }: ButtonProps) => {
  return (
    <Wrapper
      type={type}
      backgroundColor={backgroundColor}
      titleColor={titleColor}
    >
      <span>{title.toLocaleUpperCase()}</span>
    </Wrapper>
  );
};
