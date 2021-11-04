import React, { useState } from 'react';

import { Carousel } from 'react-bootstrap';

import { Wrapper, Bol, Item } from './styles';

import data from './data.json';

export interface ItemProps {
  id: number;
  src?: string;
}

export const SlideShow: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (i) => {
    console.log(i)
    setIndex(i);
  };



  return (
    <Wrapper>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
      // interval={2000}
      >
        {data.map(({ id, src }: ItemProps) => (
          <Item key={id} interval={2000}>
            <img
              className="d-block w-100"
              src={`${src}`}
              alt={`${id}`}
            />
          </Item>
        ))}
      </Carousel>
    </Wrapper>
  );
};
