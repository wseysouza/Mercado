import React, { useContext } from "react";

import { Container, Box, Left, Right } from "./styles";
import { InfosShopp } from './InfosShopp';
import { Search } from './Search';
import { Dropdown } from '@components/Dropdown'


export interface ShoppProps {
  id: string,
  name: string,
  address?: string,
  hours?: string,
  phone?: string,
  url?: string
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
    </Container >

  );
}
