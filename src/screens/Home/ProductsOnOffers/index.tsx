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
        {products !== undefined && products.map
          (({
            name,
            priceNew,
            priceOld,
            produto_id,
            img,
            discount,
            oferta_exclusiva_app }) =>
            <ProductBox
              key={produto_id}
              url={img}
              title={name}
              value={priceNew}
              valueOld={priceOld}
              discount={discount}
              exclusiveAppOffer={oferta_exclusiva_app}
            />
          )
        }
      </ListBox>
    </Container>
  );
}

