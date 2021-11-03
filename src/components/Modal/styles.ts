import styled, { css, keyframes } from 'styled-components';
import { colors } from '@styles/colors';
import { scrollbarThin } from '@styles/scrollbar';

interface ModalProps {
  show: boolean;
}

const fadeout = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const fadein = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
    display: none
  }
`;

export const Wrapper = styled.div<ModalProps>`
  position: absolute;
  display: ${p => p.show ? 'flex' : 'none'};
  justify-content: center;
  /* align-items: flex-start; */
  top: 0;



  z-index: 200;

  width: 100vw;
  height: 100vw;

  background-color: red;


`;

export const Content = styled.div<ModalProps>`
  height: 689px;
  width: 600px;
  background-color: #FAF9F7;
  border-radius: 10px;

  @media (max-width: 376px) {
    width: 100%;

    ${p => p.show ? css`
      animation: ${fadeout} 1s;
    ` : css`
      transition: ${fadein} 1s;
      /* animation: ${fadein} 4s;  */
      display: none;
    `}
    ;


    /* animation: display ${fadein} 1s ease-in; */



  }
`;

export const Header = styled.div`
  height: 48px;
  width: 100%;
  padding: 16px;
  border: 1px solid #E7E5DF;

  display: flex;

  > svg {
    width: 18px;
    height: 15px;

  }

  > div {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
  }

`;

export const Body = styled.div`
  padding: 16px;
  max-height: calc(100vh - 48px);

  overflow: auto;
  ${scrollbarThin}
`;
