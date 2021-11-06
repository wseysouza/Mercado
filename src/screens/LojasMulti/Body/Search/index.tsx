import React from 'react';

import { Wrapper, Title, Text, RowSearch } from './styles';

export const Search: React.FC = () => {
  return (
    <Wrapper>
      <Title>Como Chegar?</Title>
      <Text>Informe sua Rua, CEP, Bairro ou Cidade de origem.</Text>

      <RowSearch>
        <input type="text" placeholder="Informe seu endereço" />
        <button type="submit">COMO CHEGAR</button>
      </RowSearch>
    </Wrapper>
  );
}

