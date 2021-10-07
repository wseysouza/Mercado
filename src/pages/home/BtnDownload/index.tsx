import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Wrapper } from './styles';

export const BtnDownload: React.FC = () => {
  return (
    <Wrapper>
      <button type="button">
        <FaDownload />
        <span>ENCARTE PROMOCIONAL</span>
      </button>
    </Wrapper>
  );
};
