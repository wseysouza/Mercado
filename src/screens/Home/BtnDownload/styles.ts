import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

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
