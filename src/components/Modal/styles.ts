import { colors } from '@styles/colors';
import styled from 'styled-components';
import { IconBaseProps } from 'react-icons';
import { shade } from 'polished';
import { scrollbarThin } from '@styles/scrollbar';

interface WrapperProps {
  screenHeight: number;
  screenWidth: number;
}

interface BodyProps {
  widthModal?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  @media (max-width: 1064px) {
    width: ${p => p.screenWidth}px;
    height: ${p => p.screenHeight}px;
    position: fixed;
    overflow-y: visible;
  }
`;

export const Body = styled.div<BodyProps>`
  background: white;
  width: ${p => p.widthModal > 0 ? 80 : 50}%;
  height: ${p => p.widthModal > 0 ? 90 : 80}%;
  border-radius: 15px;

  padding: 20px 30px;

  @media (max-width: 1064px) {
    width: ${p => p.widthModal > 0 ? 90 : 50}%;
    height: ${p => p.widthModal > 0 ? 90 : 30}%;
  }
`;

export const Content = styled.div`
  height: calc(100% - 55px);

  white-space: pre-line;

  overflow-y: auto;
  ${scrollbarThin}
`;

interface HeaderProps {
  icon?: React.ComponentType<IconBaseProps>;
}

export const Header = styled.div<HeaderProps>`
  display: flex;
  justify-content: ${p => p.icon ? 'space-between' : 'flex-end'};
  align-items: center;
  font-size: 25px;
  padding-bottom: 5px;

  > button {
    background: none;
    border: none;

    > svg {
      color: ${colors.gray};
      font-size: 35px;
      padding: 3px;
      border-radius: 50%;
      cursor: pointer;

      transition: background 400ms;

      :hover {
        color: ${colors.white};
        background: ${shade(0.2, colors.gray)};
      }
    }
  }

`;

export const IconLeft = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50px;
  background-color:${colors.gray};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg{
    color: ${colors.supernova};
    width: 30px;
    height: 30px;
  }
`;
