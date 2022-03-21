import React, { useState } from 'react';
import { GetStaticProps } from 'next';

import * as S from './styles';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { useMulti, CardBannerProps } from '@hooks/multi';

import Image from 'next/image';
import Link from 'next/link';

export const SlideShow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { banners, loadingSlideShow } = useMulti();

  const handleSelect = (index: number) => {
    setIndex(index);
  };

  return (
    <S.Wrapper>
      <S.SlideShow
        activeIndex={index}
        onSelect={handleSelect}
        fade
        interval={2000}
        prevIcon={<MdKeyboardArrowLeft size={30} />}
        nextIcon={<MdKeyboardArrowRight size={30} />}
      >
        {loadingSlideShow ? (
          <S.Loading>loading...</S.Loading>
        ) : (
          banners?.map(({ id, imagem_caminho, descricao, url_pagina }: CardBannerProps) => (
            imagem_caminho.length > 0 && (
              <S.Item key={id} >
                <Image
                  key={id}
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
                        <S.LinkImage></S.LinkImage>
                      </a>
                    </Link>
                  )
                }
              </S.Item>
            )
          ))
        )}

      </S.SlideShow>
    </S.Wrapper>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const { banners } = useMulti();

  return {
    props: {
      banners
    },
    revalidate: 60 * 60 * 12,
  }
}
