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

  width: 783px;
  height: 370px;

  display: flex;
  justify-content: space-between;


  border-radius: 5px;
  border: 1px solid ${colors.secondary};

`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  line-height: 30px;
  width: 370px;
  height: 370px;

  strong{
    font-weight: bold;
  }

  > span {
    color: blue;
  }

`;

export const Image = styled.div`

  background: no-repeat center;
  background-size: cover;
  flex: 1;

  > * {
  width: 100%;
  max-width: 380px;
  max-height: 370px;
  height: 100%;
  }
`;
