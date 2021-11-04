import styled, { css } from 'styled-components';
import { colors } from '@styles/colors';
import { CarouselItem } from 'react-bootstrap';

export const Wrapper = styled.div`
  /* width: 100%; */
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */

  margin: 0 15px;

`;


export const Item = styled(CarouselItem)`
  width: 1066px;
  height: 400px;


> img {
  width: 1066px;
  height: 400px;
    /* width: 100%; */

  }
`;
