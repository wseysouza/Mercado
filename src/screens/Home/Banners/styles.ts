import { colors } from '@styles/colors';
import styled from 'styled-components';


export const ListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 34px;
  margin-bottom: 70px;


  @media (max-width: 1025px) {
    padding: 10px;
    grid-gap: 30px 20px;
  }

`;

export const Banner = styled.div`
  width: 515px;
  height: 170px;
  background-color: ${colors.tealBlue};

  display: flex;
  border-radius: 10px;
  box-shadow: 0px 1px 15px #00000029;

  @media (max-width: 1025px) {
    width: 490px;
  }

`;

export const Left = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 50%;

  h1{
    margin-top: 11px;
    font-size: 20px;
    font-weight: bold;
    color: ${props => `${props.color}`};
  }

  h3{
    font-size: 20px;
    color: ${colors.nardoGray};

  }

`;

export const Right = styled.div`
  position: relative;
  display: flex;
  width: 50%;

  .img {
    object-fit: contain !important;
}
`;
