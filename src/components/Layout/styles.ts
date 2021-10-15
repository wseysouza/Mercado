import { scrollbarThin } from '@styles/scrollbar';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
  height: 100vh;
  overflow-y: auto;
  ${scrollbarThin};

  > main {
    position: relative;
    width: 1064px;
    margin: 0 auto;
    padding: 0 2px 0 0;
  }
`;
