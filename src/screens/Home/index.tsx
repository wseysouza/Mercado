import React from 'react';

import { Wrapper } from './styles';
import { InfoShopp } from './InfoShopp';
import { SlideShow } from './Slideshow';
import { NewsSlideShow } from './NewsSlideShow';
import { ProductsOnOffers } from './ProductsOnOffers';

import { HeaderTab } from '@components/HeaderTab';
import { BtnDownload } from '@screens/Home/BtnDownload';
import { Container } from '@styles/theme';
import Banners from './Banners';

export const Home = () => {

  return (
    <Container>
      <HeaderTab title="Home | Multi Mercados" />
      <Wrapper>
        <InfoShopp />
        <SlideShow />
        <BtnDownload />
        <ProductsOnOffers />
        <Banners />
        <NewsSlideShow />
      </Wrapper>
    </Container>
  )
}



