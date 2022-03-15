import React, { useEffect } from 'react';
import Link from 'next/link';
import { BiRadioCircle } from 'react-icons/bi';
import { useMulti } from "@hooks/multi";
import { useRouter } from 'next/router';
import { Wrapper, Title, Row } from './styles';

export const StoresOpen: React.FC = () => {

  const { stores, cities, getListStores, setChangeStatus } = useMulti();

  useEffect(() => {
    getListStores({ storeOpen: true })
  }, [])

  const router = useRouter()

  const handleChange = (value: string) => {
    stores.map((item) => {
      if (item.nome === value) {
        setChangeStatus(item.cidade, cities)
        getListStores({ cidade: item.cidade, id: item.id_loja, drop: true })
      }
    })
    router.push(`lojasmulti#${value}`)
  };


  return (
    <Wrapper>
      <Title>Lojas abertas aos Domingos</Title>
      {stores && (stores.map((item) =>
        <Row onClick={() => handleChange(item.nome)}><BiRadioCircle />{item.nome}</Row>
      )
      )}
    </Wrapper >
  )
}
