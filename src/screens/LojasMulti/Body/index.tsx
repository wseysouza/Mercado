import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import { Wrapper, Header, Box, Left, Right, Map } from "./styles";
import { InfosShopp } from './InfosShopp';
import { Search } from './Search';
import { Dropdown } from '@components/Dropdown'

export interface ShoppProps {
  id: string,
  name: string,
  address?: string,
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

export const Body = ({ city }: BodyProps) => {
  const [shopps, setShopps] = useState<ShoppProps[]>(city.shopps);


  const { isLoaded, } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCrC_ofgCEUhk-PaOGN3deVzh2yC4InQ58"
  })

  const position = {
    lat: -29.359319,
    lng: -50.8130523,
  }

  const searchAddress = (data) => {

    const newShopps = shopps.map(item => {
      if (item.id === data.id) {
        return { ...item, statusMap: true }
      }

      return { ...item, statusMap: false }
    })

    setShopps(newShopps);
  }

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
                    address={item.address}
                    hours={item.hours}
                    phone={item.phone} />
                  <Search id={item.id} searchAddress={searchAddress} />
                </Left>
                <Right src={item.url} alt={item.name} />
              </Box>

              {isLoaded && item.statusMap && (
                <Map>
                  <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={position}
                    zoom={15}
                  >
                    <Marker position={position} options={{
                      label: {
                        text: "Multi"
                      }
                    }} />
                  </GoogleMap>
                </Map>
              )}
            </>
          )
        }
      })}



    </Wrapper >

  );
}
