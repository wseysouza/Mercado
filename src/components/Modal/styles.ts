import { colors } from '@styles/colors';
import styled from 'styled-components';
import { IconBaseProps } from 'react-icons';
import { shade } from 'polished';
import { scrollbarThin } from '@styles/scrollbar';

export const Wrapper = styled.div`
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
`;

export const Body = styled.div`
  background: white;
  width: 50%;
  height: 80%;
  border-radius: 15px;

  padding: 20px 30px;
`;

export const Content = styled.div`
  height: calc(100% - 55px);

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
