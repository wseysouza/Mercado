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
  width: 100px;
  height: 100px;
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

export const ListBox = styled.div`
  width: 1064px;
  /* padding: 20px; */
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
