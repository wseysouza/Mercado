import React, { useEffect, useState } from 'react';

import { Wrapper } from './styles';
import { InfoShopp } from './InfoShopp';
import { SlideShow } from './Slideshow';
import { ProductsOnOffers } from './ProductsOnOffers';

import { HeaderTab } from '@components/HeaderTab';
import { BtnDownload } from '@screens/Home/BtnDownload';
import { Container } from '@styles/theme';
import Banners from './Banners';
import { ProductProps, useMulti } from '@hooks/multi';



export const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { getListProduct } = useMulti();

  const loadingProduct = async () => {
    const listProduct: ProductProps[] = await getListProduct()

    if (listProduct.length) {
      setProducts(listProduct)
    }
  }


  useEffect(() => {
    loadingProduct();
  }, [])

  return (
    <Container>
      <HeaderTab title="Home | Multi Mercados" />
      <Wrapper>
        <InfoShopp />
        <SlideShow />
        <BtnDownload />
        <ProductsOnOffers products={products} />
        <Banners />
      </Wrapper>
    </Container>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const { getListProduct } = useMulti();

//   const products = await getListProduct();

//   return {
//     props: {
//       products
//     },
//     revalidate: 60 * 60 * 24, // 24hours
//   }
// }
