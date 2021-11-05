import styled from 'styled-components';

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
  width: 60%;
  height: 80%;
  border-radius: 15px;
  padding: 15px;
`;

export const Content = styled.div`
  padding: 50px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;
