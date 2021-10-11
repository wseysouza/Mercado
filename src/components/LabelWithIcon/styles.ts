import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  & + div {
  margin-top: 14px;
  }
`;

export const LabelIcon = styled.div`
  size: 20px;
  margin-right: 10px;
  color:${colors.supernova};
 `;

export const Label = styled.div`
  font-size: 14px;
  color: ${colors.nardoGray};
  line-height: 23px;
`;
