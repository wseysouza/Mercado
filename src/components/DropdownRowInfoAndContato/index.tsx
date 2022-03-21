import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Label, List, Wrapper } from './styles';

import { useMulti } from "@hooks/multi";

interface DropdownProps {
  label?: string;
  colorLabel?: string;
}

export const DropdownRowInfoAndContato = ({ label, colorLabel }: DropdownProps) => {

  const { findStore, cities, getListStores, setChangeStatus, getListCity } = useMulti();

  useEffect(() => {
    getListStores({})
    getListCity();
  }, [])


  const router = useRouter()

  const handleChange = (value: string) => {

    findStore.map((item) => {
      if (item.nome === value) {
        setChangeStatus(item.cidade, cities)
        getListStores({ cidade: item.cidade, id: item.id_loja, drop: true })
      }
    })
    router.push(`lojasmulti#${value}`)
  };

  return (
    <Wrapper>
      {label && <Label color={colorLabel}>{label}</Label>}
      <List
        name="store"
        onChange={event => handleChange(event.target.value)}
      >
        {findStore && findStore.map((item) => (
          <option key={item.id_loja} value={item.nome} >{item.nome}</option>
        ))}
      </List>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const { findStore } = useMulti();

  return {
    props: {
      findStore
    },
    revalidate: 60 * 60 * 12,
  }
}
