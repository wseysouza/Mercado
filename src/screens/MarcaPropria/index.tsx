import React, { useCallback, useEffect, useState } from 'react';

import { Container } from '@styles/theme';
import { ProductBox } from '@components/ProductBox'
import { HeaderTab } from '@components/HeaderTab';

import { Title, ListBox } from './styles';
import { useMulti } from '@hooks/multi';

export const MarcaPropria: React.FC = () => {
  const { getListProduct, products } = useMulti();

  useEffect(() => {
    getListProduct();
  }, [])

  console.log(products)

  return (
    <Container>
      <HeaderTab title="Marca Própria" />
      <Title>Produtos Marca Própria</Title>
      <ListBox>
        {products.length > 0 && products.map(({ name, priceNew, produto_id, img }) => <ProductBox key={produto_id} url={img} title={name} value={priceNew} />)}
      </ListBox>
    </Container>
  );
}

