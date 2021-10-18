import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  & + div {
  margin-top: 14px;
  }
`;

export const LabelIcon = styled.div`
  width: 20px;
  height: 20px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 2px;
  border-radius: 4px;
  background-color: ${colors.supernova};

  color:${colors.white};
`;

export const Label = styled.div`
  font-size: 14px;
  color: ${colors.nardoGray};
  line-height: 23px;
`;
