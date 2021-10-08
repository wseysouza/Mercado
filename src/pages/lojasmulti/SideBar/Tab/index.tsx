import React from 'react';
import { Wrapper } from './styles';

export interface TabProps {
  id?: string;
  name: string;
  onPress?: () => {};
  active?: boolean;
}

export const Tab = ({ name, onPress, active }: TabProps) => {

  return (
    <Wrapper active={active} onClick={onPress}>
      {console.log(active)}
      <span>
        {name}
      </span>
    </Wrapper>
  );
}
