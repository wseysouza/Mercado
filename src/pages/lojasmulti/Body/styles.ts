import { colors } from '@styles/colors';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  padding: 20px;
  border-left: 1px solid ${colors.silverChalice};

`;


export const Header = styled.div`
  width: 30%;
`

export const Box = styled.div`

  width: 783px;
  height: 370px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 5px;

  box-shadow: 0px 3px 6px #00000029;

  margin-top: 30px;

`;

export const Left = styled.div`

  width: 400px;
  height: 370px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  line-height: 30px;



  > strong{
    font-weight: bold;
    font-size: 24px;
    color: ${colors.primary};
  }

`;

export const Right = styled.div`
  background: no-repeat center;
  background-size: cover;
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  max-width: 383px;
  max-height: 370px;

  border-radius: 0 5px 5px 0;
`;
