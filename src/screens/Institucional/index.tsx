import React, { useEffect } from 'react';
import { Container } from '@styles/theme';

import { HeaderTab } from '@components/HeaderTab';

import { Title, Box, Text, BoxVideo, BoxImage } from './styles';

import { useMulti } from '@hooks/multi';

import Image from 'next/image';


export const Institucional = () => {

  const { getListParameterSite, parameterSite } = useMulti();

  useEffect(() => {
    getListParameterSite();
  }, [])

  return (
    <>
      {parameterSite && (
        <Container>
          <HeaderTab title="Institucional" />

          <Title>{parameterSite?.titulo}</Title>
          <Box>
            <Text>
              {parameterSite?.texto}
            </Text>
            <BoxImage>
              <Image className="img" src={parameterSite?.imagem} alt="institucional" layout='fill' />
            </BoxImage>
          </Box>

          <Title>{parameterSite?.titulo_video}</Title>
          <BoxVideo src={parameterSite.url_video} />
        </Container>
      )}
    </>
  );
}


