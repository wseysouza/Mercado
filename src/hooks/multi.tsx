import { api } from '@services/api';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { login } from '@services/auth';
import { env } from 'process';

export interface ValueProps {
  id: string,
  value: string,
  description?: string,
  usersIds?: string[],
  dividedValue?: string,
}

export interface ProductProps {
  active: string,
  discount: string,
  encerramento: string,
  expired: string,
  img: string,
  like: string,
  limit: string,
  name: string,
  priceNew: string,
  priceOld: string,
  produto_id: number,
  produtooferta_id: number,
  publicacao: string,
  um_descricao: string,
  um_sigla: string,
}

export interface ShoppProps {
  bairro: string,
  cidade: string,
  cnpj: string,
  complemento: string,
  endereco: string,
  id_loja: number,
  latitude: string,
  longitude: string,
  nome: string,
  numero: number,
  uf: string,
}

export interface CardBannerProps {
  descricao: string,
  id: number,
  imagem_caminho: string,
}

export interface PromotionProps {
  id: number,
  imagem: string,
  ordem_exibicao: number,
  periodo: string,
  titulo: string,
}

export interface ParameterSiteProps {
  email: string,
  encarte: string,
  facebook: string,
  fone_ddd: string,
  fone_numero: string,
  id: number,
  imagem: string,
  instagram: string,
  politica_privacidade_id: number,
  termo_uso_id: number,
  texto: string,
  titulo: string,
  titulo_video: string,
  url_trabalheconosco: string,
  url_video: string,
}

export interface CardsProps {
  descricao: string,
  id: number,
  imagem: string,
  ordem_exibicao: number,
}

export interface NewsProps {
  anuncio_id: number,
  descricao: string,
  imagem: string,
  titulo: string,
}

export interface TermsProps {
  politicaprivacidade_texto: string,
  politicaprivacidade_titulo: string,
  termouso_texto: string,
  termouso_titulo: string,
}

export interface StoresProps {
  bairro: string,
  cep: string,
  cidade: string,
  cnpj: string,
  complemento: string,
  endereco: string,
  fone_ddd: string,
  fone_numero: string,
  horario_atendimento1: string,
  horario_atendimento2: string,
  horario_atendimento3: string,
  id_loja: number,
  latitude: string,
  longitude: string,
  nome: string,
  numero: number,
  periodo_atendimento1: string,
  periodo_atendimento2: string,
  periodo_atendimento3: string,
  uf: string
}

export interface CityProps {
  cidade: string,
  active?: boolean;
}


export interface MultiContextData {
  products: ProductProps[];
  shops: ShoppProps[];
  cards: CardsProps[];
  banners: CardBannerProps[];
  promotion: PromotionProps[];
  parameterSite: ParameterSiteProps;
  News: NewsProps[];
  terms: TermsProps;
  stores: StoresProps[];
  city: CityProps[];
  getListProduct(): Promise<void>;
  getListShop(): Promise<void>;
  getListCard(): Promise<void>;
  getListBanner(): Promise<void>;
  getListPromotion(): Promise<void>;
  getListParameterSite(): Promise<void>;
  getListNews(): Promise<void>;
  getListTerms(): Promise<void>;
  getListStores: ({ cidade }: CityProps) => {};
  getListCity(): Promise<void>;
}

const MultiContext = createContext<MultiContextData>({} as MultiContextData)

export const MultiProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [shops, setShops] = useState<ShoppProps[]>([]);
  const [cards, setCards] = useState<CardsProps[]>([]);
  const [banners, setBanner] = useState<CardBannerProps[]>([]);
  const [promotion, setPromotion] = useState<PromotionProps[]>([]);
  const [parameterSite, setParameterSite] = useState<ParameterSiteProps>();
  const [News, setNews] = useState<NewsProps[]>([]);
  const [terms, setTerms] = useState<TermsProps>();
  const [stores, setStores] = useState<StoresProps[]>([]);
  const [city, setCity] = useState<CityProps[]>([]);


  const getToken = async () => {
    const { data: { login: { token } } } = await login({
      username: "joao@nada.com",
      password: "12345678",
    })

    return token
  };

  const getListProduct = async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { listaofertaespecial } } = await api.get('listaoferta?ordem&produtodescricaolike&lista=especial&categoriaproduto_id', {
      headers: {
        authorization: token
      }
    });

    setProducts(listaofertaespecial);
  };

  const getListShop = useCallback(async () => {
    const token = await login({
      username: 'joao@nada.com',
      password: '12345678',
    })

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: lojas } = await api.get('loja', {
      headers: {
        authorization: token
      }
    });


    console.log('lojas >> ', lojas);

    setShops(lojas);
  }, []);

  const getListCard = async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { cartao } } = await api.get('get_cartao', {
      headers: {
        authorization: token
      }
    });

    setCards(cartao);
  };

  const getListBanner = async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { banner } } = await api.get('get_banner', {
      headers: {
        authorization: token
      }
    });

    setBanner(banner);

  };

  const getListPromotion = async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { promocao } } = await api.get('get_promocao', {
      headers: {
        authorization: token
      }
    });

    setPromotion(promocao);

  };

  const getListParameterSite = async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { parametrosite } } = await api.get('get_parametrosite', {
      headers: {
        authorization: token
      }
    });

    setParameterSite(parametrosite);
  };

  const getListNews = async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { novidades } } = await api.get('novidade', {
      headers: {
        authorization: token
      }
    });

    setNews(novidades);
  };

  const getListTerms = async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { termo } } = await api.get('get_termo?sistema=site', {
      headers: {
        authorization: token
      }
    });

    setTerms(termo);
  };







  const getListStores = async ({ cidade }) => {

    console.log(">>> city", cidade)

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { lojas } } = await api.get(`loja?somentelojasdomingo=false&cidade=${cidade}&idloja`, {
      headers: {
        authorization: token
      }
    });

    setStores(lojas);
  };





  const getListCity = async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { cidade } } = await api.get('get_cidade', {
      headers: {
        authorization: token
      }
    });

    setCity(cidade);
  };


  return (
    <MultiContext.Provider value={{
      products,
      shops,
      cards,
      banners,
      promotion,
      parameterSite,
      News,
      terms,
      stores,
      city,
      getListProduct,
      getListShop,
      getListCard,
      getListBanner,
      getListPromotion,
      getListParameterSite,
      getListNews,
      getListTerms,
      getListStores,
      getListCity,
    }}>
      {children}
    </MultiContext.Provider>

  )
}

export const useMulti = (): MultiContextData => {
  const context = useContext(MultiContext);

  if (!context) {
    throw new Error('useMulti must be used within an homeProps')
  }

  return context;
}
