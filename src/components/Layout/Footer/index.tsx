import React from 'react';
import { RowCards } from './RowCards';
import { RowInfo } from './RowInfo';

import { Wrapper } from './styles';
import data from './data.json';

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <RowInfo />
      <RowCards cards={data} />
    </Wrapper>
  );
};
