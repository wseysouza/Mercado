import React, { useState, useEffect } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Wrapper, NewsBox, AbstractNews } from './styles';
import { Modal } from '@components/Modal';
import { useMulti } from '@hooks/multi';


import data from './data.json';
import { FaRegNewspaper } from 'react-icons/fa';
import { DetailsNews } from './DetailsNews';



export interface ItemProps {
  id: number;
  src: string;
  resumo: string;
  descricao: string;
  link?: string
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.545,
    paritialVisibilityGutter: 60,
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


  // const { getListNews, News } = useMulti();

  // useEffect(() => {
  //   getListNews();
  // }, [])

  // console.log(" news >>>", News)


  const [showModal, setShowModal] = useState(false);

  const [currentNews, setCurrentNews] = useState<ItemProps>(null)

  const handleModal = (status: boolean, data: ItemProps) => {
    status ? setShowModal(true) : setShowModal(false)
    setCurrentNews(data)
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
            <NewsBox key={data.id} onClick={() => handleModal(!showModal, data)}>
              <AbstractNews>{data.resumo}</AbstractNews>
              <img
                src={data.src}
              />
            </NewsBox>

          );
        })}
      </Carousel>
      <Modal show={showModal} icon={FaRegNewspaper} onClose={() => handleModal(!showModal, null)}>
        <DetailsNews currentNews={currentNews} />
      </Modal>
    </Wrapper >
  );
};
