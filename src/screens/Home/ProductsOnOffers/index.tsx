import React from 'react';

import { Title, ListBox } from './styles';
import { ProductBox } from '../../../components/ProductBox'
import { Container } from '@styles/theme';
import { ProductProps } from '@hooks/multi';

interface ProductsOnOffersProps {
  products: ProductProps[];
}

export const ProductsOnOffers = ({ products }: ProductsOnOffersProps) => {

  return (
    <Container>
      <Title>Ofertas</Title>
      <ListBox>
        {products !== undefined && products.map(({ name, priceNew, produto_id, img }) => <ProductBox key={produto_id} url={img} title={name} value={priceNew} />)}
      </ListBox>
    </Container>
  );
}

