import React, { useState } from 'react';

import { Container } from '@styles/theme';
import { ProductBox } from '@components/ProductBox'
import { HeaderTab } from '@components/HeaderTab';

import { Title, ListBox } from './styles';

export const MarcaPropria: React.FC = () => {

  const [products, setproducts] = useState([
    { id: 0, name: 'ARROZ MULTI', value: 'R$ 3,00', url: "images/arroz.png" },
    { id: 1, name: 'RAÇÃO MULTI', value: 'R$ 3,00', url: 'images/racao.png' },
    { id: 2, name: 'DÚZIA OVOS MULTI', value: 'R$ 3,00', url: 'images/ovos.jpg' },
    { id: 3, name: 'REFRI MULTI', value: 'R$ 3,00', url: 'images/refri.jpg' },
    { id: 4, name: 'SORVETE MULTI', value: 'R$ 3,00', url: 'images/sorvete.jpg' },
    { id: 5, name: 'CARVÃO MULTI', value: 'R$ 3,00', url: 'images/carvao.png' },
  ])

  return (
    <Container>
      <HeaderTab title="Marca Própria" />
      <Title> Produtos Marca Própria </Title>
      <ListBox>
        {products.map(({
          id, url, name, value
        }) => <ProductBox key={id} url={url} title={name} value={value} />)}
      </ListBox>
    </Container>
  );
}

