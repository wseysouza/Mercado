import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px solid ${colors.gray};
  height: fit-content;
  width: 100%;
  margin: 0 auto;
  `;

export const Content = styled.div`
  width: 1064px;
  margin: 0 auto;
  height: 165px;
  padding: 25px 0;

  > img {
    height: 25px;

    & + img {
      margin-left: 10px;
    }
  }
`;
