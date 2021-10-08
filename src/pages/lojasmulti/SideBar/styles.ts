import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 290px;
  height: 100%;
  margin-top: 10px;
  border-right: 1px solid ${colors.silverChalice};
`;
