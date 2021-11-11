import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 18px;
  text-align: left;
  color: ${colors.nardoGray};

  display: flex;
  align-items: center;
`;

export const LabelIcon = styled.div`
  width: 49px;
  height: 49px;

  border-radius: 5px;
  margin-right: 16px;
  background-color:${colors.supernova};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg{
    color: ${colors.white};
    width: 30px;
    height: 30px;
  }
`;

export const Label = styled.a`
  font-size: 18px;
  color: ${colors.nardoGray};
  text-decoration: underline;
`;



