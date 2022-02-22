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

export interface CardProps {
  descricao: string,
  id: number,
  imagem: string,
  ordem_exibicao: number,
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

export interface MultiContextData {
  products: ProductProps[];
  shops: ShoppProps[];
  card: CardProps[];
  banners: CardBannerProps[];
  promotion: PromotionProps[];
  parameterSite: ParameterSiteProps;
  getListProduct(): Promise<void>;
  getListShop(): Promise<void>;
  getListCard(): Promise<void>;
  getListBanner(): Promise<void>;
  getListPromotion(): Promise<void>;
  getListParameterSite(): Promise<void>;
}

const MultiContext = createContext<MultiContextData>({} as MultiContextData)

export const MultiProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [shops, setShops] = useState<ShoppProps[]>([]);
  const [card, setCard] = useState<CardProps[]>([]);
  const [banners, setBanner] = useState<CardBannerProps[]>([]);
  const [promotion, setPromotion] = useState<PromotionProps[]>([]);
  const [parameterSite, setParameterSite] = useState<ParameterSiteProps>();


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

    const { data: { listCard } } = await api.get('get_cartao', {
      headers: {
        authorization: token
      }
    });

    setCard(listCard);
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


  return (
    <MultiContext.Provider value={{
      products,
      shops,
      card,
      banners,
      promotion,
      parameterSite,
      getListProduct,
      getListShop,
      getListCard,
      getListBanner,
      getListPromotion,
      getListParameterSite,
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
