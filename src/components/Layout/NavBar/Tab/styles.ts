import { colors } from '@styles/colors';
import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface WrapperProps {
  active?: boolean;
}

export const Wrapper = styled.a<WrapperProps>`
  position: relative;
  padding: 20px 10px;
  color: ${colors.secondary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 16px;
  font-weight: bold;

  :last-child {
    min-width: 170px;
  }


  ${p => p.active && css`
    > span {
      position: absolute;
      height: 3px;
      background: ${colors.secondary};
      width: 100%;
      bottom: 0;
      left: 0;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  `}

  ${p => !p.active && css`
    > span {
      position: absolute;
      height: 1px;
      background: ${colors.gray};
      width: 100%;
      bottom: 0;
      left: 0;
      margin-bottom: 1px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  `}

  :hover {
    color: ${shade(0.5, colors.white)};
  }

`;
