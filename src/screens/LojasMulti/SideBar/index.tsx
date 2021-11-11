import React from 'react';

import { Tab, TabProps } from './Tab';
import { Wrapper } from './styles';


interface SideBarProps {
  onPress: Function;
  tabList: TabProps[];
}

export const SideBar = ({ onPress, tabList }: SideBarProps) => {

  return (
    <Wrapper>
      {tabList && tabList.map(item => (
        <Tab key={item.id} name={item.name} onPress={() => onPress(item.id)} active={item.active} />
      ))}
    </Wrapper>
  );
}
