import React, { useState, useEffect, useCallback } from 'react';

import { Container } from '@styles/theme';
import { HeaderTab } from '@components/HeaderTab';
import { useMulti } from "@hooks/multi";

import { Body } from './Body';
import { SideBar } from './SideBar';
import { Content } from './styles';

import { useRouter } from 'next/router';

export const LojasMulti: React.FC = () => {
  const { cities, cityCurrent, getListCity } = useMulti();
  const router = useRouter();

  console.log(">>>", router.asPath)

  useEffect(() => {
    getListCity();
  }, [])


  return (
    <Container>
      <HeaderTab title="Lojas Multi" />
      <Content>
        {cities && <SideBar />}
        {cityCurrent && (<Body />)}
      </Content>
    </Container>
  );
}


