import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: fit-content;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  border-left: 1px solid ${colors.silverChalice};

  @media (max-width: 1025px){
    padding-right: 10px;
    padding-left: 14px;
  }

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

  > span{
    font-weight: bold;
    font-size: 24px;
    color: ${colors.primary};
  }

`;

export const Right = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  max-width: 383px;
  max-height: 370px;

  .img{
    /* object-fit: contain !important; */
    flex: 1;
    border-radius: 0 5px 5px 0;
  }


`;

export const Map = styled.div`

  display: flex;
  margin-top: 26px;

  width: 783px;
  height: 442px;

  border-radius: 5px;
  box-shadow: 0px 3px 6px #00000029;

   > * {
   border-radius: 5px;
   width: 100%;
   height: 100%;
  }
  `;

export const Shopp = styled.div``
