import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${colors.primary};
  margin-top: 36px ;
  margin-bottom: 16px ;
  width: 100%;
  font-weight: bold;
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
