import styled, { css } from 'styled-components';
import { colors } from '@styles/colors';
import { CarouselItem } from 'react-bootstrap';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;


export const Item = styled(CarouselItem)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  > img {
    height: 450px;

  }
`;
