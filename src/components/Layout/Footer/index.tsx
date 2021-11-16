import React, { useState } from 'react';
import { RowCards } from './RowCards';
import { RowInfo } from './RowInfo';

import { Wrapper } from './styles';
import data from './data.json';
import { LGPD } from './LGPD';

export const Footer: React.FC = () => {
  const [status, setStatus] = useState(true);

  const hangleStatus = (status: boolean) => {
    status ? setStatus(true) : setStatus(false);
  }

  return (
    <Wrapper>
      <RowInfo />
      <RowCards cards={data} />
      <LGPD />
    </Wrapper>
  );
};
