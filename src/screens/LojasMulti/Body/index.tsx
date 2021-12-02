import React, { useCallback, useEffect, useState } from "react";
import { useJsApiLoader } from '@react-google-maps/api'


import { Wrapper, Header, Box, Left, Right, Map, Shopp } from "./styles";
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

  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);
  const [response, setResponse] = useState<google.maps.DistanceMatrixResponse | null>(null);

  //end digitado na search esta no data
  const searchAddress = (data) => {

    // setOrigin(null);
    // // setDestination(null);
    // setResponse(null);

    setOrigin(data.address)
    console.log(data)

    const newShopps = city.shopps.map(item => {
      if (item.id === data.id) {
        return { ...item, statusMap: true };
      }
      return { ...item, statusMap: false };
    })

    setShopps(newShopps);
  }

  const directionsCallback = useCallback((res) => {

    console.log('call back >> ', res)

    if (res !== null && res.status === "OK") {
      setResponse(res);
    } else {
      console.log(' res >>> ', res);
    }
  }, []);




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
            <Shopp key={item.id}>
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

              {item.statusMap && origin && (
                <Map>
                  <GoogleMaps origin={origin} dest={item.destination} />
                </Map>)}
            </Shopp>
          )
        }
      })}
    </Wrapper >

  );
}
