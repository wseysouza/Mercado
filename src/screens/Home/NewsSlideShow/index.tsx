import React, { useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Image } from "semantic-ui-react";

import { Wrapper, NewsBox } from './styles';

import data from './data.json';



export interface ItemProps {
  id: number;
  src?: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.54,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
}

export const NewsSlideShow: React.FC = () => {

  function handleModalNews() {
    console.log(">>>> test", data)
  }

  return (
    // https://codesandbox.io/s/bt3v7?file=/components/Simple.js
    <Wrapper>
      <Carousel
        ssr
        partialVisbile
        infinite={true}
        autoPlay={true}
        containerClass='carousel-container'
        itemClass='carousel-image-item'
        autoPlaySpeed={6000}
        responsive={responsive}
      >
        {data.map((data) => {
          return (
            <NewsBox key={data.id} onClick={handleModalNews}>
              <span>{data.resumo}</span>
              <img
                src={data.src}
              />
            </NewsBox>
          );
        })}

      </Carousel>
    </Wrapper>
  );
};
