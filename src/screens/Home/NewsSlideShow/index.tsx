import React, { useState, useEffect } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Wrapper, NewsBox, AbstractNews, Item } from './styles';
import { Modal } from '@components/Modal';
import { useMulti, NewsProps } from '@hooks/multi';

import { FaRegNewspaper } from 'react-icons/fa';
import { DetailsNews } from './DetailsNews';

import Image from "next/image";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
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


  const { getListNews, News } = useMulti();

  useEffect(() => {
    getListNews();
  }, [])


  const [showModal, setShowModal] = useState(false);

  const [currentNews, setCurrentNews] = useState<NewsProps>(null)

  const handleModal = (status: boolean, data: NewsProps) => {
    status ? setShowModal(true) : setShowModal(false)
    setCurrentNews(data)
  }


  return (
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
        {News.map((data) => {
          return (
            <NewsBox key={data.anuncio_id} onClick={() => handleModal(!showModal, data)}>
              <AbstractNews>{data.titulo}</AbstractNews>
              <Item key={data.anuncio_id}>
                {data.imagem && (<Image
                  className='img'
                  src={data.imagem}
                  layout='fill'
                />)}
              </Item>
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
