import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 239px;
  height: 270px;
  padding: 20px;

  border-radius: 10px;
  box-shadow: 0px 1px 15px #00000029;

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Image = styled.img`
  width: 100%;
  background: transparent;
`;


export const Title = styled.text`
  max-width: 100%;
  font-size: 14px;
  color: ${colors.nardoGray};
  font-weight: bold;
`;


export const Value = styled.text`
  max-width: 100%;
  font-size: 20px;
  color: ${colors.primary};
  font-weight: bold;

`;


