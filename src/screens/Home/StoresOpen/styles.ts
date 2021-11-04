import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const IconClose = styled.button`
  position: absolute;
  right: 0;
  top: 0;

  border: 0;
  background-color: transparent;

  > svg{
    color: ${colors.nardoGray};
    width: 25px;
    height: 25px;
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

  margin-top: 26px;
  margin-bottom: 30px;

`;

export const Row = styled.a`
  position: relative;
  color: ${colors.nardoGray};
  font-size: 25px;
  display: flex;
  width: max-content;
  align-items: center;
  text-decoration: underline;

  > svg{
    color: ${colors.supernova};
    margin-right: 20px;
  }

  & + a{
    margin-top: 20px;
  }
`;

