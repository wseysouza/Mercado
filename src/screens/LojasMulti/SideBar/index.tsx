import React, { useCallback, useEffect } from 'react';

import { Tab } from './Tab';
import { Wrapper } from './styles';

import { CityProps, useMulti } from "@hooks/multi";


interface SideBarProps {
  onPress: Function;
  cities: CityProps[];
}

export const SideBar = () => {
  const { cities, setChangeStatus } = useMulti();


  const changeCity = useCallback((city: string) => {
    setChangeStatus(city, cities);
  }, [cities])



  return (
    <Wrapper>
      {cities && cities.map(item => (
        <Tab key={item.cidade} name={item.cidade} onPress={() => changeCity(item.cidade)} active={item.active} />
      ))}
    </Wrapper>
  );
}
