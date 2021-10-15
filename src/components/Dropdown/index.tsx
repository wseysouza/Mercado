import React, { useState } from 'react';

import { Label, LabelSelect, Wrapper } from './styles';


interface ItemProps {
  id: string;
  name: string;
  selected?: boolean | false;
}

interface DropdownProps {
  label?: string;
  items: ItemProps[];
}

export const Dropdown = ({ label, items }: DropdownProps) => {
  const [store, setStore] = useState('')

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <LabelSelect
        name="store"
        value={store}
        onChange={e => setStore(e.target.value)}
      >
        {items && items.map((item) => (
          <option key={item.id} selected={item.selected}>{item.name}</option>
        ))}
      </LabelSelect>
    </Wrapper>
  );
};
