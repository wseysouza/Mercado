import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;

  > button {
    text-decoration: none;
    border: none;
    height: 50px;
    padding: 10px 15px;
    border-radius: 3px;
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
    background: ${colors.white};

    > span {
      margin-left: 10px;
    }

  }
  `;

export const Booklet = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
