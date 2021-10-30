import { colors } from '@styles/colors';
import styled, { css } from 'styled-components';

interface WrapperProps {
  active?: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;

  border: none;
  text-decoration: none;

  text-align: left;

  color: ${colors.secondary};
  background: ${colors.tealBlue};

  > span {
    padding: 22px 32px;
    transition: background, fontWeight 200ms;
  }


  ${p => p.active && css`
    > span {
      background: rgba(254, 204, 0, 0.34);
      color: ${colors.primary};
      font-weight: bold;

      width: 90%;
      left: 0;
      border-radius: 0 38px 38px 0;
    }
  `}
`;
