import styled from 'styled-components';
import { colors } from '@styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  `;

interface LabelProps {
  color?: string;
}

export const Label = styled.div<LabelProps>`
  font-size: 12px;
  color: ${p => p.color ? p.color : colors.white};
  margin-bottom: 2px;
`;

export const List = styled.ul`
  width: 100%;
  padding: 7px;
  border-radius: 2px;
  border: 1px solid ${colors.silverChalice};
  background-color: ${colors.white};
  color: ${colors.nardoGray};
`;

