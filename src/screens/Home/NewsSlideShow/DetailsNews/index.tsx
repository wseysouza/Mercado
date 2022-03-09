import React from "react";
import { Wrapper, Item } from './styles';

import { NewsProps } from "@hooks/multi";

import Image from "next/image";

interface DetailsNewsProps {
  currentNews: NewsProps;
}

export const DetailsNews = ({ currentNews }: DetailsNewsProps) => {

  return (
    <Wrapper key={currentNews.anuncio_id}>
      <h1>{currentNews.titulo}</h1>
      <Item key={currentNews.anuncio_id}>
        {currentNews.imagem && (<Image className="img" src={currentNews.imagem} alt={currentNews.titulo} layout='fill' />)}
      </Item>
      <span>{currentNews.descricao}</span>
      {/* {currentNews?.link && (<a href={currentNews.link} target="_blank">Acessar Link</a>)} */}
    </Wrapper>
  )
}
