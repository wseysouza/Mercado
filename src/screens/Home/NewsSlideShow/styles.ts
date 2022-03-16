import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 70px;
  position: relative;
  height: fit-content;
  background: transparent;

`;

export const NewsBox = styled.div`
    width: 332px;
    height: 100%;
    background: transparent;
    opacity: 1;
    visibility: visible;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;


export const Item = styled.div`
  width: 100%;
  height: 249px;


  position: relative;

    .img {
      border-radius: 5px;
      object-fit: contain !important;
    }
`;


export const AbstractNews = styled.span`
  width: 100%;
  margin-bottom: 10px;
  color: ${colors.primary};
  font-weight: bold;
`;

