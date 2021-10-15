import styled from 'styled-components';
import { colors } from '@styles/colors';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Label = styled.div`
  font-size: 12px;
  color: ${colors.white};
  margin-bottom: 2px;
`;

export const LabelSelect = styled.select`
  padding: 7px;
  border-radius: 2px;
  border: 1px solid ${colors.silverChalice};
  background-color: ${colors.white};
  color: ${colors.nardoGray};
`;

