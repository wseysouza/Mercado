import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 100%;
  background: ${colors.primary};
  padding: 15px  25px;
  margin: 15px 0 20px 0;
  border-radius: 9px;
  color: ${colors.white};

  > button {
    background: transparent;
    border: none;
    color: ${colors.white};
    margin: 0 5px;
    border-bottom: 1px solid ${colors.white};
  }

  > strong  {
    font-weight: bold;
    margin-left: 5px;
  }
`;
