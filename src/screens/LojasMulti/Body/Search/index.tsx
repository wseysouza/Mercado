import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import Input from '@components/Input';
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

import { Wrapper, Title, Text, ButtonSearch, BoxCity } from './styles';

interface AddressProps {
  id: string;
  statusMap: boolean;
}

export interface SearchProps {
  id: string,
  searchAddress: (data: AddressProps) => void,
}

export const Search = ({ id, searchAddress }: SearchProps) => {
  const formRef = useRef(null);


  return (
    <Wrapper >
      <Title>Como Chegar?</Title>
      <Text>Informe sua Rua, CEP, Bairro ou Cidade de origem.</Text>

      <Form
        ref={formRef}
        style={{ display: 'flex' }}
        onSubmit={(e) => searchAddress({ ...e, id })}
        action={formRef.current ? formRef.current.reset() : null}
      >


        <LoadScript
          googleMapsApiKey="AIzaSyBF_tXJO8TcRzP_dNgD5T_XydVi9xZmSXo"
          libraries={["places"]}
        >
          <BoxCity>
            {/* <StandaloneSearchBox> */}
            <Input name="address" type="text" placeholder="Informe seu endereço" />
            {/* </StandaloneSearchBox> */}
          </BoxCity>
        </LoadScript>

        <ButtonSearch type="submit">COMO CHEGAR</ButtonSearch>
      </Form>

    </Wrapper>
  );
}
