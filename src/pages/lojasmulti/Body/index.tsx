import { Container, Box, Text, Image } from "./styles";
import React from "react";

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
        <Text>
          <strong>{item.name}</strong>
          <span>{item.address}</span>
          <span>{item.hours}</span>
          <span>{item.phone}</span>
        </Text>
        <Image>
          {item.image}
        </Image>

      </Box>))}

    </Container>

  );
}
