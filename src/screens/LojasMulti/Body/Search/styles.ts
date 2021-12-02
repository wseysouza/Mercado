import { colors } from '@styles/colors';
import styled from 'styled-components';
import { shade } from 'polished';



export const Wrapper = styled.div`

`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.nardoGray};

`;

export const Text = styled.div`
  font-size: 14px;
  color: ${colors.nardoGray};

`;

export const BoxCity = styled.div`
  position: relative;

> *{
  position: relative;
}
`;


export const ButtonSearch = styled.button`

      width: 35%;
      height: 40px;

      padding: 10px;
      font-size: 12px;
      color: ${colors.white};

      border: 0;
      border-radius: 0 5px 5px 0;

      background-color: ${colors.primary};
      transition: background-color 0.2s;

      &:hover {
            background: ${shade(0.2, colors.primary)};
      }

`;
