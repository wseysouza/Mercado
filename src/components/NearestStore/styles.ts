import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const Text = styled.div`
  font-size: 12px;
  color: ${colors.secondary};
  margin-bottom: 2px;
`;

export const LabelSelect = styled.select`
  width: 331px;

  padding: 7px;

  border: 1px solid ${colors.silverChalice};
  border-radius: 2px;

  background-color: ${colors.white};
  color: ${colors.nardoGray};

`;
