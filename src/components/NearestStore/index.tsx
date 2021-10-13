import React, { useState } from 'react';

import { Wrapper, Text, LabelSelect } from './styles';

interface NearestStoreProps {
  id: string[];
  text: string;
  select: string[];
}

export const NearestStore = ({ id, text, select }: NearestStoreProps) => {

  const [store, setStore] = useState('')

  return (
    <Wrapper>
      <Text>
        {text}
      </Text>

      <LabelSelect
        name="store"
        value={store}
        onChange={e => setStore(e.target.value)}>

        <option>Selecione uma loja</option>
        {id.map(item => (<option value={item}>{select[item]}</option>))}

      </LabelSelect>

      {console.log(store)}
    </Wrapper>
  );
}

