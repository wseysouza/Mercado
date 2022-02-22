import React, { useEffect } from 'react';

import { ListBox, Banner, Left, Right } from './styles';

import Image from 'next/image';

import { useMulti, PromotionProps } from '@hooks/multi';

const Banners: React.FC = () => {

  const { getListPromotion, promotion } = useMulti();

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
    <ListBox>
      {promotion.map(({ id, imagem, periodo, titulo }: PromotionProps) =>
        <Banner key={id}>
          <Left /*color={colors[titulo]}*/>
            <h3>{periodo}</h3>
            <h1>{titulo}</h1>
          </Left>
          <Right>
            <Image className="img" src={imagem} layout='fill' />
          </Right>
        </Banner>)
      }
    </ListBox>
  );
}

export default Banners;
