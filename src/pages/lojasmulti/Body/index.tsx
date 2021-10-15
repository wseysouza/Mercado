import React from "react";

import { Container, Box, Left, Right, Image } from "./styles";
import { InfosShopp } from './InfosShopp';
import { Search } from './Search';
import { Dropdown } from '@components/Dropdown'


export interface ShoppProps {
  id: string,
  name: string,
<<<<<<< HEAD
  address?: string,
  hours?: string,
  phone?: string,
  url?: string
=======
  address: string,
  hours: string,
  phone: string,
  url: string
>>>>>>> own_brand_v1
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
<<<<<<< HEAD
      <Dropdown
        items={city.shopps} />

      {city.shopps.map((item) => {
        if (item.id > '0') {
          return (
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
                <img src={item.url} alt={item.name} />
              </Right>
            </Box>
          )
        }
      })}
=======
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
            <Image src={item.url} alt={item.name} />
          </Right>
        </Box>
      ))
      }

>>>>>>> own_brand_v1
    </Container >

  );
}
