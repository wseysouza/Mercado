import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Title = styled.div`
width: 100%;
  font-size: 24px;
  color: ${colors.primary};
  margin-top: 29px;
  margin-bottom: 24px;
  font-weight: bold;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;

`;

export const BoxImage = styled.div`
  position: relative;
  width: 541px;
  height: 359px;

  .img{
    object-fit: contain !important;
  }
`;

export const Text = styled.div`
  width: 508px;

  font-size: 14px;
  line-height: 19px;
  color: ${colors.nardoGray};

  text-align: justify;

  margin-right: 17px;

`;

export const BoxVideo = styled.iframe`
  width: 100%;
  height: 602px;
  border: 0;
  margin-bottom: 108px;
`;
