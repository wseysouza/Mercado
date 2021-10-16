import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px solid ${colors.gray};
  width: 100%;
  margin: 0 auto;
  `;

export const Content = styled.div`
  width: 1064px;
  height: 112px;
  margin: 0 auto;
  padding: 25px 0;

  > img {
    height: 25px;

    & + img {
      margin-left: 10px;
    }
  }
`;
