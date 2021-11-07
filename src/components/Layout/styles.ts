import { scrollbarThin } from '@styles/scrollbar';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 96px;


  @media (max-width: 990px) {
    align-items: stretch;
  }

  @media (max-width: 1075px) {
    width: max-content;
  }

  @media (min-width: 1023px) {
    height: calc(100vh - 96px);
    overflow-y: auto;
    ${scrollbarThin};
  }

  > main {
    position: relative;
    width: 1066px;
    margin: 0 auto;
    padding: 0 2px 0 0;
    height: fit-content;
  }
`;
