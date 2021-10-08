import { colors } from '@styles/colors';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  background-color: red;
  width: 100%;
  max-height: 100%;

`;

export const Box = styled.div`
  margin: 20px;
  max-width: 100%;
  max-height: 100%;
  display: flex;


  border-radius: 5px;
  border: 1px solid ${colors.secondary};

`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  line-height: 30px;


`;

export const Image = styled.img`

`;
