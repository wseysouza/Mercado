import React from 'react';

import { Content, Wrapper } from './styles';

interface CardProps {
  id: number
  url: string
}
interface CardsProps {
  cards: CardProps[]
}

export const RowCards = ({ cards }: CardsProps) => {
  return (
    <Wrapper>
      <Content>
        {cards && cards.map((card) => <img key={card.id} src={card.url} alt="image" />)}
      </Content>
    </Wrapper>
  );
};
