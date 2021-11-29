import { api } from '@services/api';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useAuth } from '@hooks/auth'

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

export interface MultiContextData {
  products: ProductProps[];
  shops: ShoppProps[];
  getListProduct(): Promise<void>;
  getListShop(): Promise<void>;
}

const MultiContext = createContext<MultiContextData>({} as MultiContextData)

export const MultiProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [shops, setShops] = useState<ShoppProps[]>([]);

  const { signIn } = useAuth();

  const getListProduct = useCallback(async () => {
    const token = localStorage.getItem('@MultiMercado:token');

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: { listaofertaespecial } } = await api.get('listaoferta?ordem&produtodescricaolike&lista=especial&categoriaproduto_id', {
      headers: {
        authorization: token
      }
    });

    setProducts(listaofertaespecial);
  }, []);

  const getListShop = useCallback(async () => {
    const token = await signIn();

    api.defaults.headers.common[
      'x-access-token'
    ] = `${token}`;

    const { data: lojas } = await api.get('loja', {
      headers: {
        authorization: token
      }
    });

    setShops(lojas);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@MultiMercado:token')

    if (!token) {
      signIn();
    }
  }, [signIn])

  return (
    <MultiContext.Provider value={{
      products,
      shops,
      getListProduct,
      getListShop
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
