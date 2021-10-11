import { Container, Box, Left, Right } from "./styles";
import React from "react";
import { InfosShopp } from './InfosShopp';
import { Search } from './Search';


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

      {city.shopps.map(item => (
        <Box>
          <Left>
            <strong>{item.name}</strong>
            <InfosShopp address={item.address} hours={item.hours} phone={item.phone} />
            <Search address='dfsdfsdfsdfsdf' />
          </Left>
          <Right>
            {item.image}
          </Right>
        </Box>))}

    </Container>

  );
}
