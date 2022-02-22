import React, { useEffect, useState } from 'react';

import { Carousel } from 'react-bootstrap';

import { Wrapper, Item } from './styles';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { useMulti, CardBannerProps } from '@hooks/multi';

import Image from 'next/image';

// export interface ItemProps {
//   id: number;
//   imagem_caminho?: string;
//   descricao: string;
// }

export const SlideShow: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (i) => {
    setIndex(i);
  };

  const { getListBanner, banners } = useMulti();

  useEffect(() => {
    getListBanner();
  }, [])


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
        {banners.map(({ id, imagem_caminho, descricao }: CardBannerProps) => (
          <Item key={id} >
            <Image
              id='img'
              className="d-block w-100"
              src={`${imagem_caminho}`}
              alt={`${descricao}`}
              layout='fill'
            />
          </Item>
        ))}
      </Carousel>
    </Wrapper>
  );
};
