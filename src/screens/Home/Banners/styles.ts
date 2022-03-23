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

export const Loader = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #000;
  width: 70px;
  height: 70px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
    text-align: center;
  }

  h3{
    font-size: 20px;
    color: ${colors.nardoGray};
    text-align: center;

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
