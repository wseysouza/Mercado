import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${colors.primary};
  margin: 26px 0;
  width: 100%;
`;

export const ListBox = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 36px;
  margin-bottom: 70px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
