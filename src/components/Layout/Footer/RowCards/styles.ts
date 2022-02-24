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
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  position: relative;
  height: 40px;
  width: 75px;
  display: flex;

  justify-content: left;

  .img {
    width: fit-content;
    height: 40px;
    object-fit: contain !important;
  }
`;
