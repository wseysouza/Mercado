import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${colors.primary};
  padding: 15px  25px;
  border-radius: 9px;
  color: ${colors.white};

  > a  {
    border-bottom: 1px solid ${colors.white};
    margin-left: 5px;
    margin-right: 5px;
  }
  > strong  {
    font-weight: bold;
    margin-left: 5px;
  }
`;
