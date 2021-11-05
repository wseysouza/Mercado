import React, { useState } from 'react';
import Link from 'next/link';

import { Label, List, Wrapper } from './styles';


interface ItemProps {
  id: string;
  name: string;
  selected?: boolean | false;
  src?: string;
}

interface DropdownProps {
  label?: string;
  colorLabel?: string;
  items: ItemProps[];
}

export const Dropdown = ({ label, colorLabel, items }: DropdownProps) => {
  const [store, setStore] = useState('')

  return (
    <Wrapper>
      {label && <Label color={colorLabel}>{label}</Label>}
      <List
        name="store"
        value={store}
        onChange={e => setStore(e.target.value)}
      >
        {items && items.map((item) => (
          <li key={item.id} /*selected={item.selected}*/><a>{item.name}</a></li>
        ))}
      </List>
    </Wrapper>
  );
};
