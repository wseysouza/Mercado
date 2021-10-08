import { Container, Box, Text, Image } from "./styles";
import React from "react";

export interface ShoppProps {
  id: string,
  name: string,
  address: string,
  hours: string,
  phone: string,
  image: string
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

      <Box>
        <Text>
          <span>{city.shopps[0].name}</span>
          <span>{city.shopps[0].address}</span>
          <span>{city.shopps[0].hours}</span>
          <span>{city.shopps[0].phone}</span>
        </Text>
        <Image url={city.shopps[0].image} />

      </Box>
    </Container>

  );
}
