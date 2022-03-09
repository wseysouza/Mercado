import React, { useEffect } from 'react';
import Link from 'next/link';

import { BiRadioCircle } from 'react-icons/bi';

import { useMulti } from "@hooks/multi";


import { Wrapper, Title, Row } from './styles';

export const StoresOpen: React.FC = () => {

  const { stores, getListStores } = useMulti();

  useEffect(() => {
    getListStores({ storeOpen: true })
  }, [])


  return (
    <Wrapper>
      <Title>Lojas abertas aos Domingos</Title>
      {stores && (stores.map((item) =>
        <Link href="/lojasmulti">
          <Row ><BiRadioCircle />{item.nome}</Row>
        </Link>
      )
      )}
    </Wrapper >
  )
}
