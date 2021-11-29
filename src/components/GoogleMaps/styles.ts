// import { colors } from '@styles/colors';
import styled from "styled-components";

export const Map = styled.div`
  height: 100%;
  z-index: 0;
  > * {
   border-radius: 5px;
  }
`;


export const Address = styled.div`
  box-sizing: border - box;
  width: 240px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  position: absolute;
  left: 50%;
  margin-left: -120px;
  margin-top: 12px;
`;

export const AddressField = styled.input`
  box-sizing: border - box;
  border: 1px solid transparent;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  padding: 0 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  outline: none;
  text-overflow: ellipses;
`;

