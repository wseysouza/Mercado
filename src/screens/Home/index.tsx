import React from 'react';
import { HeaderTab } from '@components/HeaderTab';

import { Wrapper } from './styles';
import { InfoShopp } from './InfoShopp';
import { SlideShow } from './Slideshow';
import { ProductsOnOffers } from './ProductsOnOffers';
import { BtnDownload } from '@screens/Home/BtnDownload';
import { Container } from '@styles/theme';
import { Modal } from '@components/Modal';
import StoresOpen from './StoresOpen';
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
      <Modal show={false} onHide={() => {}}>
        <StoresOpen />
      </Modal>
    </Container>
  );
}
