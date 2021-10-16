import styled, { css } from 'styled-components';
import { colors } from '@styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  >  img {
    height: 100%;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
`;

interface BolProps {
  active?: boolean;
}

export const Bol = styled.span<BolProps>`
  width: 10px;
  height: 10px;
  border-radius: 25px;

  & + span {
    margin-left: 8px;
  }

  ${p => !p.active && css`
    background: ${colors.gray};
  `}

  ${p => p.active && css`
    background: ${colors.secondary};
  `}
`;
