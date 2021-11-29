import React, { useEffect, useState } from 'react';

import { Title, ListBox } from './styles';
import { ProductBox } from '../../../components/ProductBox'
import { Container } from '@styles/theme';
import { useMulti } from '@hooks/multi';

export const ProductsOnOffers: React.FC = () => {
  const { getListProduct, products } = useMulti();

  useEffect(() => {
    getListProduct();
  }, [getListProduct])

  return (
    <Container>
      <Title>Ofertas</Title>
      <ListBox>
        {products.length > 0 && products.map(({ name, priceNew, produto_id, img }) => <ProductBox key={produto_id} url={img} title={name} value={priceNew} />)}
      </ListBox>
    </Container>
  );
}

