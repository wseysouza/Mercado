import React, { useEffect } from 'react';

import { Wrapper } from './styles';
import { InfoShopp } from './InfoShopp';
import { SlideShow } from './Slideshow';
import { ProductsOnOffers } from './ProductsOnOffers';

import { HeaderTab } from '@components/HeaderTab';
import { BtnDownload } from '@screens/Home/BtnDownload';
import { Container } from '@styles/theme';
import Banners from './Banners';
import { useMulti } from '@hooks/multi';



export const Home = () => {
  const { getListProduct, products } = useMulti();


  useEffect(() => {
    getListProduct();
  }, [])

  return (
    <Container>
      <HeaderTab title="Home | Multi Mercados" />
      <Wrapper>
        <InfoShopp />
        <SlideShow />
        <BtnDownload />
        <ProductsOnOffers products={products} />
        <Banners />
      </Wrapper>
    </Container>
  );
}

