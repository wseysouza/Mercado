import React, { useEffect } from 'react';

import { Container } from '@styles/theme';
import { ProductBox } from '@components/ProductBox'
import { HeaderTab } from '@components/HeaderTab';

import { Title, ListBox } from './styles';
import { useMulti } from '@hooks/multi';

export const MarcaPropria: React.FC = () => {

  const { getListProduct, productsOwnBrand } = useMulti();

  useEffect(() => {
    getListProduct();
  }, [])

  return (
    <Container>
      <HeaderTab title="Marca Própria" />
      <Title>Produtos Marca Própria</Title>
      <ListBox>
        {productsOwnBrand.length > 0 && productsOwnBrand.map(({ name, priceNew, priceOld, produto_id, img, discount }) => <ProductBox key={produto_id} url={img} title={name} value={priceNew} valueOld={priceOld} discount={discount} />)}
      </ListBox>
    </Container>
  );
}

