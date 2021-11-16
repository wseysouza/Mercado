import React from 'react';

import { Tab, TabProps } from './Tab';
import { Wrapper } from './styles';


interface SideBarProps {
  onPress: Function;
  cities: TabProps[];
}

export const SideBar = ({ onPress, cities }: SideBarProps) => {

  return (
    <Wrapper>
      {cities && cities.map(item => (
        <Tab key={item.id} name={item.name} onPress={() => onPress(item.id)} active={item.active} />
      ))}
    </Wrapper>
  );
}
