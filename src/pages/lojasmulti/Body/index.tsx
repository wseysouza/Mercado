import React, { useContext } from "react";

import { Container, Box, Left, Right } from "./styles";
import { InfosShopp } from './InfosShopp';
import { Search } from './Search';
import { NearestStore } from '../../../components/NearestStore'


export interface ShoppProps {
  id: string,
  name: string,
  address: string,
  hours: string,
  phone: string,
  image?: string
}

export interface CityProps {
  id: string,
  name: string,
  active: boolean,
  shopps: ShoppProps[],
}

export interface BodyProps {
  city: CityProps;

}

export const Body = ({ city }: BodyProps) => {


  return (
    <Container>
      <NearestStore
        id={city.shopps.map(item => (item.id))}
        text="Encontre a loja mais próxima"
        select={city.shopps.map(item => (item.name))} />

      {console.log()}

      {city.shopps.map(item => (
        <Box>
          <Left>
            <strong>{item.name}</strong>
            <InfosShopp
              address={item.address}
              hours={item.hours}
              phone={item.phone} />
            <Search /*address={item.address}*/ />
          </Left>
          <Right>
            {item.image}
          </Right>
        </Box>
      ))
      }

    </Container >

  );
}
