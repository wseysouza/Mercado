import React from 'react';
import { GetStaticProps } from 'next';

import { Title, ListBox } from './styles';
import { ProductBox } from '../../../components/ProductBox'
import { Container } from '@styles/theme';
import { useMulti } from '@hooks/multi';

export const ProductsOnOffers = () => {
  const { products, loadingProductsOnOffers } = useMulti();
  return (
    <Container>
      <Title>Ofertas</Title>
      {loadingProductsOnOffers ? (
        <h1>Loading...</h1>
      ) : (
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
        </ListBox>)}
    </Container>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const { products } = useMulti();

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 12,
  }
}
