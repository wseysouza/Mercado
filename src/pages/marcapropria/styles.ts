import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;

  h1{
    font-size: 24px;
    color: ${colors.primary};
    margin-top: 29px;
    margin-bottom: 29px;
  }
`;

export const ListBox = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 36px;


  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

`;
