import React from "react";
import { Wrapper } from './styles';
// import data from "../data.json"
// import { ItemProps } from "@screens/Home/NewsSlideShow"

interface DetailsNewsProps {
  currentNews: {
    id: number;
    src: string;
    resumo: string;
    descricao: string;
    link?: string
  };
}

export const DetailsNews = ({ currentNews }: DetailsNewsProps) => {

  return (
    <Wrapper>
      <h1>{currentNews.resumo}</h1>
      <img src={currentNews.src} alt={currentNews.resumo} />
      <span>{currentNews.descricao}</span>
      {currentNews?.link && (<a href={currentNews.link} target="_blank">Acessar Link</a>)}
    </Wrapper>
  )
}
