import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${colors.primary};
  margin: 26px 0;
  width: 100%;
`;

export const ListBox = styled.div`
  width: 1064px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 36px;
  margin-bottom: 70px;


  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 30px;
    grid-gap: 36px 143px;

  }
  @media (min-device-width: 601px)
  and (max-device-width: 1025px) {
    padding: 0 30px;
    grid-gap: 16px;
  }
`;
