import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-direction: column;
  margin-bottom: 289px;

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
  }
`;

export const ContactBox = styled.div`
  display: grid;
  grid-gap: 30px 10px;
  grid-template-columns: auto auto ;


  > div{
      font-size: 18px;
      text-align: left;
      color: ${colors.nardoGray};

      display: flex;
      align-items: center;

      > span{
        width: 49px;
        height: 49px;

        border-radius: 5px;
        margin-right: 16px;
        background-color:${colors.supernova};

        display: flex;
        align-items: center;
        justify-content: center;

        > svg{
          color: ${colors.white};
          width: 30px;
          height: 30px;
        }
    } ;

    > strong{
      font-weight: bold;
    } ;
  }

`;

