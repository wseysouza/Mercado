import React from 'react';
import { HeaderTab } from '@components/HeaderTab';

import { Container, Wrapper } from './styles';
import { InfoShopp } from './InfoShopp';
import { SlideShow } from './Slideshow';
import { BtnDownload } from './BtnDownload';

const home: React.FC = () => {
  return (
    <Container>
      <HeaderTab title="Home" />
      <Wrapper>
        <InfoShopp />
        <SlideShow />
        <BtnDownload />
      </Wrapper>
    </Container>
  );
}

export default home;
