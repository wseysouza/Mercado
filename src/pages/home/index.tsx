import { useMulti } from '@hooks/multi';
import { GetStaticProps } from 'next';

import React, { useEffect } from 'react';

import { Home } from 'screens/Home';

const home: React.FC = () => {
  const { getListProduct, getListCard, getListCity, getListBanner } = useMulti();

  useEffect(() => {
    getListProduct(false);
    getListCard();
    getListCity();
    getListBanner();
  }, [])

  return <Home />;
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      home
    },
    revalidate: 60 * 60 * 12,
  }
}

export default home;
