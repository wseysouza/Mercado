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
  width: 1064px;
  padding: 20px;
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
