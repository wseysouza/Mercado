import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px;
  background: ${colors.white};

  >  p {
    margin: 0;
    color: ${colors.secondary};
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 9px;
  }
`;
