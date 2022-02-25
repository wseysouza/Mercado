import React from 'react';

import { Tab, TabProps } from './Tab';
import { Wrapper } from './styles';

import { CityProps } from "@hooks/multi";


interface SideBarProps {
  onPress: Function;
  cities: CityProps[];
}

export const SideBar = ({ onPress, cities }: SideBarProps) => {


  return (
    <Wrapper>
      {cities && cities.map(item => (
        <Tab key={item.cidade} name={item.cidade} onPress={() => onPress(item.cidade)} active={item.active} />
      ))}
    </Wrapper>
  );
}
