import React from 'react';

import { Wrapper, Bol } from './styles';



export const SlideShow: React.FC = () => {
  return (
    <Wrapper>
      <img src="images/banner.png" alt="Italian Trulli" width="100%" />
      <div>
        <Bol />
        <Bol />
        <Bol />
        <Bol active />
        <Bol />
        <Bol />
      </div>
    </Wrapper>
  );
};
