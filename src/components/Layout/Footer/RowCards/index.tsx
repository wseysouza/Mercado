import React, { useEffect } from 'react';

import { Content, Wrapper, Item } from './styles';

import { useMulti } from '@hooks/multi';

import Image from "next/image";


export const RowCards: React.FC = () => {

  const { getListCard, cards } = useMulti();

  useEffect(() => {
    getListCard();
  }, [])


  return (
    <Wrapper>
      <Content>
        {cards && cards.map((card) =>
          <Item key={card.id}>
            <Image className='img' key={card.id} src={card.imagem} alt={card.descricao} layout='fill' />
          </Item>
        )}
      </Content>
    </Wrapper>
  );
}
