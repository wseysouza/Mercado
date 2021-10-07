import styled, { css } from 'styled-components';
import { colors } from '@styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  width: 100%;
  margin-top: 20px;

  >  img {
    width: 100%;
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
