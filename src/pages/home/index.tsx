import { useMulti } from '@hooks/multi';

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

export default home;
