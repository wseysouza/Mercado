import React, { useEffect, useState } from 'react';

import { Label, List, Wrapper } from './styles';

import { StoresProps, useMulti } from "@hooks/multi";



interface DropdownProps {
  label?: string;
  colorLabel?: string;
  items: StoresProps[];
}

export const Dropdown = ({ label, colorLabel, items }: DropdownProps) => {

  const [store, setStore] = useState('')

  const { getListStores } = useMulti();

  useEffect(() => {
    items.map((item) => {
      if (item.nome === store) {
        getListStores({ cidade: item.cidade, id: item.id_loja })
      }
    })
  }, [store])


  return (
    <Wrapper>
      {label && <Label color={colorLabel}>{label}</Label>}
      <List
        name="store"
        value={store}
        onChange={e => setStore(e.target.value)}
      >
        {items && items.map((item) => (
          <option key={item.id_loja} value={item.nome} >{item.nome}</option>
        ))}
      </List>
    </Wrapper>
  );
};
