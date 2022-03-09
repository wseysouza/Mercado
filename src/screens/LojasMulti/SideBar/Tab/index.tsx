import React from 'react';
import { Wrapper } from './styles';

export interface TabProps {
  name: string;
  onPress: () => void;
  active: boolean;
}

export const Tab = ({ name, onPress, active }: TabProps) => {

  return (
    <Wrapper active={active} onClick={onPress}>
      <span>
        {name}
      </span>
    </Wrapper>
  );
}
