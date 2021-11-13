import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  input{
      height: 40px;

      border: 1px solid ${colors.silverChalice};
      border-radius: 5px 0 0 5px;

      font-size: 14px;
      color: ${colors.nardoGray};

      padding: 10px;

      &::placeholder{
        color: ${colors.silverChalice};
      };
  }
`;
