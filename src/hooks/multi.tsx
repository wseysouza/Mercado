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
  oferta_exclusiva_app: boolean,
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
  textopaginacontato: string,
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
  imagem: string,
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
  uf: string,
  statusMap: boolean,
  selected: boolean
}

export interface CityProps {
  storeOpen?: boolean,
  cidade?: string,
  active?: boolean,
  id?: number | string,
}


export interface MultiContextData {
  products: ProductProps[];
  productsOwnBrand: ProductProps[];
  shops: ShoppProps[];
  cards: CardsProps[];
  banners: CardBannerProps[];
  promotion: PromotionProps[];
  parameterSite: ParameterSiteProps;
  News: NewsProps[];
  terms: TermsProps;
  stores: StoresProps[];
  dropdown: StoresProps[];
  cities: CityProps[];
  cityCurrent: string;
  findStore: StoresProps[];
  getListProduct(): Promise<void>;
  getListShop(): Promise<void>;
  getListCard(): Promise<void>;
  getListBanner(): Promise<void>;
  getListPromotion(): Promise<void>;
  getListParameterSite(): Promise<void>;
  getListNews(): Promise<void>;
  getListTerms(): Promise<void>;
  getListStores: ({ storeOpen, cidade, id }: CityProps) => {};
  getListCity(): Promise<void>;
  setChangeStatus: (cidade: string, citiesCurrent: CityProps[]) => void;
}

const MultiContext = createContext<MultiContextData>({} as MultiContextData)

export const MultiProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productsOwnBrand, setProductsOwnBrand] = useState<ProductProps[]>([]);
  const [shops, setShops] = useState<ShoppProps[]>([]);
  const [cards, setCards] = useState<CardsProps[]>([]);
  const [banners, setBanner] = useState<CardBannerProps[]>([]);
  const [promotion, setPromotion] = useState<PromotionProps[]>([]);
  const [parameterSite, setParameterSite] = useState<ParameterSiteProps>();
  const [News, setNews] = useState<NewsProps[]>([]);
  const [terms, setTerms] = useState<TermsProps>();
  const [stores, setStores] = useState<StoresProps[]>([]);
  const [dropdown, setDropdown] = useState<StoresProps[]>([]);
  const [cities, setCities] = useState<CityProps[]>([]);
  const [cityCurrent, setCityCurrent] = useState<string>("");
  const [findStore, setFindStore] = useState<StoresProps[]>([]);


  const getToken = async () => {
    // const { data: { login: { token } } } = await login({
    //   username: "joao@nada.com",
    //   password: "12345678",
    // })
    const { data: { login: { token } } } = await login({
      username: "appsite@appsite",
      password: "U0A8uGtxeO8I",
    })

    return token
  };

  const getListProduct = async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { listaofertadiaria } } = await api.get('listaoferta?ordem&produtodescricaolike&lista=diaria&categoriaproduto_id', {
      headers: {
        authorization: token
      }
    });

    const { data: { listaofertaespecial } } = await api.get('listaoferta?ordem&produtodescricaolike&lista=especial&categoriaproduto_id&marcapropria=true', {
      headers: {
        authorization: token
      }
    });

    setProducts(listaofertadiaria);
    setProductsOwnBrand(listaofertaespecial);
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


    try {
      const { data: { banner } } = await api.get('get_banner', {
        headers: {
          authorization: token
        }
      });
      setBanner(banner);
    } catch (error) {
      console.log(">>>>>", error)
    }

    // const response = await api.get('get_banner', {
    //   headers: {
    //     authorization: token
    //   }
    // });

    // console.log(">>>>", response)

    // setBanner(banner);

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

  const getListStores = async ({ storeOpen, cidade, id }: CityProps) => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;


    if (cidade && !id) {
      const { data: { lojas } } = await api.get(`loja?somentelojasdomingo=false&cidade=${cidade}&idloja`, {
        headers: {
          authorization: token
        }
      });
      setStores(lojas);
      setDropdown(lojas);
    }

    else if (cidade && id) {
      const { data: { lojas } } = await api.get(`loja?somentelojasdomingo=false&cidade=${cidade}&idloja=${id}`, {
        headers: {
          authorization: token
        }
      });
      setStores(lojas);
    }

    else if (storeOpen) {
      const { data: { lojas } } = await api.get(`loja?somentelojasdomingo=${storeOpen}&cidade=&idloja`, {
        headers: {
          authorization: token
        }
      });
      setStores(lojas);
    }

    else {
      const { data: { lojas } } = await api.get(`loja?somentelojasdomingo&cidade&idloja`, {
        headers: {
          authorization: token
        }
      });
      setFindStore(lojas);
    }

    // console.log(`loja?somentelojasdomingo=${storeOpen}&cidade=${cidade}&idloja=${id}`)

  };


  const setChangeStatus = useCallback((cidade: string, citiesCurrent: CityProps[]) => {

    const newCitys = citiesCurrent.map(city => {

      if (city.cidade === cidade) {
        setCityCurrent(city.cidade);
        return { ...city, active: true }
      }
      return { ...city, active: false };
    })

    setCities(newCitys);


  }, [])


  const getListCity = useCallback(async () => {

    const token = await getToken();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { cidade: cidades } } = await api.get('get_cidade', {
      headers: {
        authorization: token
      }
    });

    setChangeStatus(cidades[0].cidade, cidades);
    setCityCurrent(cidades[0].cidade);
  }, [])



  return (
    <MultiContext.Provider value={{
      products,
      productsOwnBrand,
      shops,
      cards,
      banners,
      promotion,
      parameterSite,
      News,
      terms,
      stores,
      dropdown,
      cities,
      cityCurrent,
      findStore,
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
      setChangeStatus,
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
