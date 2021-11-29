import React, { useState } from 'react';
import { useRouter, NextRouter } from 'next/router';

import { Label, List, Wrapper } from './styles';


interface DropdownProps {
  label?: string;
  colorLabel?: string;
}

const DropdownRowInfoAndContato = ({ label, colorLabel }: DropdownProps) => {

  const router = useRouter()

  const handleChange = (value: string) => {
    router.push(value)
  };

  const [stores, setStores] = useState([
    { id: "0", name: 'Multi Lugana', selected: true, src: "/lojasmulti#main" },
    { id: "1", name: 'Multi Maxi Compra', selected: false, src: "/lojasmulti#main" },
    { id: "2", name: 'Multi Serrano', selected: false, src: "/lojasmulti#main" },
  ]);

  return (
    <Wrapper>
      {label && <Label color={colorLabel}>{label}</Label>}
      <List
        name="store"
        onChange={event => handleChange(event.target.value)}
      >
        {stores && stores.map((item) => (
          <option key={item.id} value={item.src} >{item.name}</option>
        ))}
      </List>
    </Wrapper>
  );
};

export default DropdownRowInfoAndContato;
