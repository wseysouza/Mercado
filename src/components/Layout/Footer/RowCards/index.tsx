import React from 'react';

import { Content, Wrapper } from './styles';

interface CardProps {
  url: string
}
interface CardsProps {
  cards: CardProps[]
}

export const RowCards = ({ cards }: CardsProps) => {
  return (
    <Wrapper>
      <Content>
        {cards && cards.map((card) => <img src={card.url} alt="image" />)}
      </Content>
    </Wrapper>
  );
};
