import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';

import { ListBox, Banner, Left, Right } from './styles';

import Image from 'next/image';

import { useMulti, PromotionProps } from '@hooks/multi';

export const Banners: React.FC = () => {
  const { getListPromotion, promotion, loadingPromotion } = useMulti();

  useEffect(() => {
    getListPromotion();
  }, [])

  // const colors = {
  //   "HortiFruti": "#d68b36",
  //   "Só hoje": "#8B7956",
  //   "Cortes de Carnes": '#9e6262',
  //   "Marca própria": "#352506",
  // }

  return (
    loadingPromotion ? (
      <h1>Loading...</h1>
    ) : (
      <ListBox>
        {promotion.map(({ id, imagem, periodo, titulo }: PromotionProps) =>
          <Banner key={id}>
            <Left /*color={colors[titulo]}*/>
              <h3>{periodo}</h3>
              <h1>{titulo}</h1>
            </Left>
            <Right>
              {imagem && (<Image key={id} className="img" src={imagem} layout='fill' />)}
            </Right>
          </Banner>)
        }
      </ListBox>)
  );
}

export const getStaticProps: GetStaticProps = () => {
  const { promotion } = useMulti();

  return {
    props: {
      promotion
    },
    revalidate: 60 * 60 * 12,
  }
}
