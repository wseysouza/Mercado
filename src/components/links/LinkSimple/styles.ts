import styled from 'styled-components';
import Link from 'next/link'
import { shade } from 'polished';
import { colors } from '@styles/colors';

export const Wrapper = styled(Link)``;

export const Content = styled.a`
  font-size: 13px;

  :hover {
    color: ${shade(0.5, colors.white)};
  }
`;
