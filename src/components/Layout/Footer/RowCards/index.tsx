import React from 'react';

import { Content, Wrapper, Item } from './styles';

import { useMulti } from '@hooks/multi';

import Image from "next/image";


export const RowCards: React.FC = () => {

  const { cards, loadingRowCards } = useMulti();

  return (
    <Wrapper>
      {loadingRowCards ? (
        <h1>Loading...</h1>
      ) : (
        <Content>
          {cards && cards.map((card) =>
            <Item key={card.id}>
              <Image className='img' key={card.id} src={card.imagem} alt={card.descricao} layout='fill' />
            </Item>
          )}
        </Content>)}
    </Wrapper>
  );
}
