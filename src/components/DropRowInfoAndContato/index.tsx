import { Dropdown } from '@components/Dropdown';
import React from 'react';

// import { Container } from './styles';

interface DropProps {
  label?: string;
  colorLabel?: string;
}

const DropdownRowInfoAndContato = ({ colorLabel, label }: DropProps) => {
  return (
    <Dropdown label={label} colorLabel={colorLabel} items={[
      { id: "0", name: 'Multi Lugana', selected: true, src: "/lojasmulti" },
      { id: "1", name: 'Multi Maxi Compra', selected: false, src: "/lojasmulti" },
      { id: "2", name: 'Multi Serrano', selected: false, src: "/lojasmulti" },
    ]} />
  )
}

export default DropdownRowInfoAndContato;
