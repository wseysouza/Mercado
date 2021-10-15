import { DropdownShopp } from '@components/Dropdown';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
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
