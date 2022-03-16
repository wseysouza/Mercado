import React, { useEffect, useState } from 'react';

import { Carousel } from 'react-bootstrap';

import { Wrapper, Item, LinkImage } from './styles';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { useMulti, CardBannerProps } from '@hooks/multi';

import Image from 'next/image';
import Link from 'next/link';



export const SlideShow: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (i) => {
    setIndex(i);
  };

  const { getListBanner, banners } = useMulti();

  useEffect(() => {
    getListBanner();
  }, [])

  // console.log(banners[0].url_pagina)

  return (
    <Wrapper>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        interval={2000}
        prevIcon={<MdKeyboardArrowLeft size={30} />}
        nextIcon={<MdKeyboardArrowRight size={30} />}
      >
        {banners?.map(({ id, imagem_caminho, descricao, url_pagina }: CardBannerProps) => (
          imagem_caminho.length > 0 && (
            <Item key={id} >
              <Image
                id='img'
                className="d-block w-100"
                src={`${imagem_caminho}`}
                alt={`${descricao}`}
                layout='fill'
              />
              {url_pagina &&
                (
                  <Link href={url_pagina}>
                    <a target="_blank">
                      <LinkImage></LinkImage>
                    </a>
                  </Link>
                )
              }
            </Item>
          )
        ))}
      </Carousel>
    </Wrapper>
  );
};
