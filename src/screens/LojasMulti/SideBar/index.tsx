import React, { useCallback } from 'react';
import { GetStaticProps } from 'next';

import { Tab } from './Tab';
import { Wrapper } from './styles';

import { useMulti } from "@hooks/multi";

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

export const getStaticProps: GetStaticProps = () => {
  const { cities } = useMulti();

  return {
    props: {
      cities
    },
    revalidate: 60 * 60 * 12,
  }
}
