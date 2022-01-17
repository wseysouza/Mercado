import { colors } from '@styles/colors';
import styled from 'styled-components';


export const Container = styled.div`

  width: 239px;
  height: 270px;
  /* padding: 50px 10px; */

  border-radius: 10px;
  box-shadow: 0px 1px 15px #00000029;

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const AnchorImage = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  /* object-fit: fill; */

  /* background: transparent; */

  .img {

    object-fit: contain !important;

  }
`;


export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  font-size: 14px;
  color: ${colors.nardoGray};
  font-weight: bold;
`;


export const Value = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: ${colors.primary};
  font-weight: bold;
`;


