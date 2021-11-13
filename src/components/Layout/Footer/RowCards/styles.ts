import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px solid ${colors.gray};
  height: fit-content;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1064px;
  height: 112px;
  margin: 0 auto;
  padding: 25px 0;


  > img {
    height: 30px;

    & + img {
      margin-left: 20px;
    }
  }
`;
