import React from 'react';

import { Wrapper } from './styles';
import { InfoShopp } from './InfoShopp';
import { SlideShow } from './Slideshow';
import { ProductsOnOffers } from './ProductsOnOffers';

import { HeaderTab } from '@components/HeaderTab';
import { BtnDownload } from '@screens/Home/BtnDownload';
import { Container } from '@styles/theme';
import Banners from './Banners';

export const Home: React.FC = () => {
  return (
    <Container>
      <HeaderTab title="Home" />
      <Wrapper>
        <InfoShopp />
        <SlideShow />
        <BtnDownload />
        <ProductsOnOffers />
        <Banners />
      </Wrapper>
    </Container>
  );
}
