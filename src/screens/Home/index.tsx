import React from 'react';
import { HeaderTab } from '@components/HeaderTab';

import { Wrapper } from './styles';
import { InfoShopp } from '../../components/home/InfoShopp';
import { SlideShow } from '../../components/home/Slideshow';
import { ProductsOnOffers } from '../../components/home/ProductsOnOffers';
import { BtnDownload } from '@components/home/BtnDownload';
import { Container } from '@styles/theme';

export const Home: React.FC = () => {
  return (
    <Container>
      <HeaderTab title="Home" />
      <Wrapper>
        <InfoShopp />
        <SlideShow />
        <BtnDownload />
        <ProductsOnOffers />
      </Wrapper>
    </Container>
  );
}
