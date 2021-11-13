import { colors } from '@styles/colors';
import styled from 'styled-components';


export const globalTheme = {
  colors: {
    primary: colors.primary,
    background: colors.white
  },
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1025px) {
    margin: 0 30px;
  }

`;

