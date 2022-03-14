import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Label, List, Wrapper } from './styles';

import { useMulti } from "@hooks/multi";


interface DropdownProps {
  label?: string;
  colorLabel?: string;
}

const DropdownRowInfoAndContato = ({ label, colorLabel }: DropdownProps) => {

  const { findStore, cities, getListStores, setChangeStatus } = useMulti();

  useEffect(() => {
    getListStores({})
  }, [])


  const router = useRouter()

  const handleChange = (value: string) => {
    console.log(">>>", value, cities)

    router.push("lojasmulti")

    setChangeStatus(value, cities);
  };

  return (
    <Wrapper>
      {label && <Label color={colorLabel}>{label}</Label>}
      <List
        name="store"
        onChange={event => handleChange(event.target.value)}
      >
        {findStore && findStore.map((item) => (
          <option key={item.id_loja} value={item.cidade} >{item.nome}</option>
        ))}
      </List>
    </Wrapper>
  );
};

export default DropdownRowInfoAndContato;
