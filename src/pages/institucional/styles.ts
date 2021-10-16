import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
 flex-direction: column;
 margin-bottom: 109px;

  > h1{
      font-size: 24px;
      color: ${colors.primary};
      margin-top: 29px;
      margin-bottom: 24px;
    }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
`;

export const Text = styled.div`
  width: 508px;

  font-size: 14px;
  line-height: 19px;
  color: ${colors.nardoGray};

  margin-right: 17px;

  > p {
    margin-bottom: 15px;
  }
`;

export const Image = styled.img`
  width: 541px;
  height: 359px;
`;

export const BoxVideo = styled.iframe`
  width: 100%;
  height: 602px;
  border: 0;
`;
