import React, { FunctionComponent, FunctionComponentElement, InputHTMLAttributes, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import Input from '@components/Input';


import { Wrapper, Title, Text, ButtonSearch } from './styles';

interface AddressProps {
  id: string;
  statusMap: boolean;
}

export interface SearchProps {
  id: string,
  searchAddress: (data: AddressProps) => void,
}

export const Search = ({ id, searchAddress }: SearchProps) => {



  return (
    <Wrapper>
      <Title>Como Chegar?</Title>
      <Text>Informe sua Rua, CEP, Bairro ou Cidade de origem.</Text>

      <Form
        style={{ display: 'flex' }}
        onSubmit={(e) => searchAddress({ ...e, id })}
      >
        <Input name="address" type="text" placeholder="Informe seu endereço" />
        <ButtonSearch type="submit">COMO CHEGAR</ButtonSearch>
      </Form>

    </Wrapper>
  );
}
