import { colors } from '@styles/colors';
import { shade } from 'polished';
import styled, { css } from 'styled-components';

export const Header = styled.div`
  flex-direction: column;
  width:100% ;


  > h1{
    font-size: 24px;
    color: ${colors.primary};
    margin-top: 29px;
    margin-bottom: 24px;
  }

  > p {
    font-size: 14px;
    color: ${colors.nardoGray};
    margin-bottom: 40px;
    text-align: justify;
  }
`;

export const ContactBox = styled.div`
  display: grid;
  grid-gap: 30px 10px;
  grid-template-columns: auto auto ;
  width: 100%;
  margin-bottom: 289px;

`;

const themeSVG = css`
  color: ${colors.white};
  padding: 10px;
  width: 49px;
  height: 49px;

  border-radius: 5px;
  margin-right: 16px;
  background-color:${colors.supernova};

  display: flex;
  align-items: center;
  justify-content: center;
`


export const LocalizationShopp = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  color: ${colors.gray};
  width: 80%;

  > svg{
    ${themeSVG}
  }
`;

export const Phone = styled.div`
  display: flex;
  align-items: center;
  text-align: left;


  > svg{
    ${themeSVG}
  }

  > a {
    color: ${colors.nardoGray};
    font-weight: bold;
    font-size: 18px;
    :hover{
      color: ${shade(0.5, colors.nardoGray)}
    }
  }
`;

