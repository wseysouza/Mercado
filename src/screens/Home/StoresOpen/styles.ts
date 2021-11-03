import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  //background-color: red;
  position: relative;
`;

export const IconClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;


  > svg{
    color: ${colors.supernova};
    width: 30px;
    height: 30px;
  }

`;

export const IconCalendar = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50px;
  background-color:${colors.gray};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg{
    color: ${colors.supernova};
    width: 30px;
    height: 30px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  color: ${colors.nardoGray};
  font-size: 35px;

`;

export const Row = styled.div`
  color: ${colors.nardoGray};
  font-size: 25px;
`;

