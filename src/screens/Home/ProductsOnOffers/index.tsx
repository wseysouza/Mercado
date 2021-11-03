import React, { useState } from 'react';

import { Title, ListBox } from './styles';
import { ProductBox } from '../../../components/ProductBox'
import { Container } from '@styles/theme';

export const ProductsOnOffers: React.FC = () => {

  const [products, setproducts] = useState([
    { id: '0', name: 'ARROZ MULTI', value: 'R$ 3,00', url: "images/arroz.png" },
    { id: '1', name: 'RAÇÃO MULTI', value: 'R$ 3,00', url: 'images/racao.png' },
    { id: '2', name: 'DÚZIA OVOS MULTI', value: 'R$ 3,00', url: 'images/ovos.jpg' },
    { id: '3', name: 'REFRI MULTI', value: 'R$ 3,00', url: 'images/refri.jpg' },
    { id: '4', name: 'SORVETE MULTI', value: 'R$ 3,00', url: 'images/sorvete.jpg' },
    { id: '4', name: 'CARVÃO MULTI', value: 'R$ 3,00', url: 'images/carvao.png' },
  ])

  return (
    <Container>
      <Title>Ofertas</Title>
      <ListBox>
        {products.map(({
          url, name, value
        }) => <ProductBox url={url} title={name} value={value} />)}
      </ListBox>
    </Container>
  );
}

