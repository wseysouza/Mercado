import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api'


import { Wrapper, Header, Box, Left, Right, Map } from "./styles";
import { InfosShopp } from './InfosShopp';
import { Search } from './Search';
import { Dropdown } from '@components/Dropdown'

export interface ShoppProps {
  id: string,
  name: string,
  origin?: string,
  destination?: string,
  hours?: string,
  phone?: string,
  url?: string,
  statusMap?: boolean,
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


const libraries = ["places"];

export const Body = ({ city }: BodyProps) => {

  const [directions, setDirections] = useState();
  const [shopps, setShopps] = useState<ShoppProps[]>(city.shopps);
  const [shoppCurrent, setShoppCurrent] = useState<ShoppProps>(null);


  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   libraries,
  // });


  const searchAddress = (data) => {

    const newShopps = shopps.map(item => {
      if (item.id === data.id) {


        return { ...item, origin: data.address, statusMap: true };
      }

      return { ...item, origin: '', statusMap: false };
    })

    setShopps(newShopps);
    // initMap();
  }

  // const Map = () =>


  return (
    <Wrapper>
      <Header>
        <Dropdown items={city.shopps} />
      </Header>

      {shopps.map((item) => {
        if (item.id > '0') {
          return (
            <>
              <Box>
                <Left>
                  <span>{item.name}</span>
                  <InfosShopp
                    address={item.destination}
                    hours={item.hours}
                    phone={item.phone} />
                  <Search id={item.id} searchAddress={searchAddress} />
                </Left>
                <Right src={item.url} alt={item.name} />
              </Box>




            </>
          )
        }
      })}



    </Wrapper >

  );
}
