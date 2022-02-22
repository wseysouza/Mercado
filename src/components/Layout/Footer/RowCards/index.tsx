import React, { useEffect } from 'react';

import { Content, Wrapper } from './styles';

// import { useMulti } from '@hooks/multi';
import data from '../data.json';


export const RowCards: React.FC = () => {

  // const { getListCard, card } = useMulti();

  // useEffect(() => {
  //   getListCard();
  // }, [])


  return (
    <Wrapper>
      <Content>
        {data && data.map((card) => <img key={card.id} src={card.url} alt="image" />)}
      </Content>
    </Wrapper>
  );
}
