import { createGlobalStyle } from 'styled-components';
import { colors } from '@styles/colors';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.white};
    color: ${colors.secondary};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
<<<<<<< HEAD
=======
    width: 1064px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
>>>>>>> own_brand_v1
  }

  body, input, button {
    font-family:"Roboto Slab", serif;
    font-size:  16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
