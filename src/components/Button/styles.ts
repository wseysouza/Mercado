import { colors } from '@styles/colors';
import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  titleColor?: string;
}

export const Wrapper = styled.button<ButtonProps>`
  border: none;
  text-decoration: none;

  width: 140px;
  height: 40px;
  background: ${p => p.backgroundColor ? p.backgroundColor : colors.secondary};
  color: ${p => p.titleColor ? p.titleColor : colors.white};
  border-radius: 4px;
  font-size: 15px;


  & + button {
    margin-left: 10px;
  }
`;
