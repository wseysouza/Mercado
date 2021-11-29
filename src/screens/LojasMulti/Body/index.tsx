import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api'


import { Wrapper, Header, Box, Left, Right, Map } from "./styles";
import { InfosShopp } from './InfosShopp';
import { Search } from './Search';
import { Dropdown } from '@components/Dropdown';
import { GoogleMaps } from '@components/GoogleMaps'

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

export const Body = ({ city }: BodyProps) => {

  const [shopps, setShopps] = useState<ShoppProps[]>(city.shopps);


  const searchAddress = (data) => {

    const newShopps = city.shopps.map(item => {
      if (item.id === data.id) {
        return { ...item, statusMap: true };
      }
      return { ...item, statusMap: false };
    })

    setShopps(newShopps);
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCrC_ofgCEUhk-PaOGN3deVzh2yC4InQ58"
  })

  useEffect(() => {
    setShopps(city.shopps);
  }, [city])


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

              {isLoaded && item.statusMap ? (
                <Map>
                  <GoogleMaps />

                  {/* <GoogleMap
                    center={{ lat: -29.35913211079724, lng: -50.81280467550441 }}
                    zoom={15}
                  >
                    <Marker
                      position={{ lat: -29.35913211079724, lng: -50.81280467550441 }}
                    />
                  </GoogleMap> */}
                </Map>
              ) : <></>}
            </>
          )
        }
      })}
    </Wrapper >

  );
}
