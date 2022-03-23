import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';

import * as S from './styles';

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
      <S.Loader>
        <S.Loading></S.Loading>
      </S.Loader>
    ) : (
      <S.ListBox>
        {promotion.map(({ id, imagem, periodo, titulo }: PromotionProps) =>
          <S.Banner key={id}>
            <S.Left /*color={colors[titulo]}*/>
              <h3>{periodo}</h3>
              <h1>{titulo}</h1>
            </S.Left>
            <S.Right>
              {imagem && (<Image key={id} className="img" src={imagem} layout='fill' />)}
            </S.Right>
          </S.Banner>)
        }
      </S.ListBox>)
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
