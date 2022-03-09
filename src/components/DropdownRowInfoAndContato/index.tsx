import React, { useEffect, useState } from 'react';
import { useRouter, NextRouter } from 'next/router';

import { Label, List, Wrapper } from './styles';

import { useMulti } from "@hooks/multi";


interface DropdownProps {
  label?: string;
  colorLabel?: string;
}

const DropdownRowInfoAndContato = ({ label, colorLabel }: DropdownProps) => {

  const { findStore, getListStores } = useMulti();

  useEffect(() => {
    getListStores({})
  }, [])


  const router = useRouter()

  const handleChange = (value: string) => {
    router.push(value)
  };

  return (
    <Wrapper>
      {label && <Label color={colorLabel}>{label}</Label>}
      <List
        name="store"
        onChange={event => handleChange(event.target.value)}
      >
        {findStore && findStore.map((item) => (
          <option key={item.id_loja} value={"lojasmulti"} >{item.nome}</option>
        ))}
      </List>
    </Wrapper>
  );
};

export default DropdownRowInfoAndContato;
