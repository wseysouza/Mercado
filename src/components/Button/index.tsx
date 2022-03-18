import React from 'react';

import { Wrapper } from './styles';

interface ButtonProps {
  type: 'button' | 'submit';
  title: string;
  backgroundColor?: string;
  titleColor?: string;
  enableOrDisableAllCookies?: (value: string) => void
}

export const Button = ({ type, title, backgroundColor, titleColor, enableOrDisableAllCookies }: ButtonProps) => {
  return (
    <Wrapper
      type={type}
      backgroundColor={backgroundColor}
      titleColor={titleColor}
      onClick={() => enableOrDisableAllCookies(title)}
    >
      <span>{title.toLocaleUpperCase()}</span>
    </Wrapper>
  );
};
