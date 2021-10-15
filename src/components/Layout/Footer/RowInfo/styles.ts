import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 20px 3fr 20px 2fr;
  grid-template-rows: auto;

  justify-content: center;
  align-items: center;
  height: 178px;
  padding: 10px 0;
  color: ${colors.white};
`;

export const Left = styled.div`
  > h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

export const InsideLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  font-size: 13px;
`;

export const Division = styled.div`
  width: 0.01rem;
  height: 7rem;
  background: ${colors.athensGray};
  display: flex;
  justify-content: center;
`;

export const Center = styled.div`
   > h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

export const InsideCenter = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  font-size: 13px;
`;

export const Right = styled.div`
   > h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

export const InsideRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  font-size: 13px;
`;

export const SocialNetwork = styled.div`
  > svg {

    & + svg {
      margin-left: 10px;
    }
  }
`;
