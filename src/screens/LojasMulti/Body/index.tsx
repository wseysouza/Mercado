import React, { useCallback, useEffect, useState } from "react";

import { Wrapper, Header, Box, Left, Right, Map, Shopp } from "./styles";
import { InfosShopp } from './InfosShopp';
import { Search } from './Search';
import { Dropdown } from '@components/Dropdown';
import { GoogleMaps } from '@components/GoogleMaps'

import { CityProps, StoresProps, useMulti } from "@hooks/multi";

// export interface ShoppProps {
//   id: string,
//   name: string,
//   origin?: string,
//   destination?: string,
//   hours?: string,
//   phone?: string,
//   url?: string,
//   statusMap?: boolean,
// }

// export interface CityProps {
//   id: string,
//   name: string,
//   active: boolean,
//   shopps: ShoppProps[],
// }

// export interface BodyProps {
//   city: CityProps;
// }



export const Body = ({ city }) => {


  const { stores, getListStores } = useMulti();

  useEffect(() => {
    getListStores({ cidade: city });
  }, [city])


  const [shopps, setShopps] = useState(city.shopps);

  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);

  //end digitado na search esta no data
  const searchAddress = (data) => {

    setOrigin(data.address)

    const newShopps = city.shopps.map(item => {
      if (item.id === data.id) {
        return { ...item, statusMap: true };
      }
      return { ...item, statusMap: false };
    })

    setShopps(newShopps);
  }

  useEffect(() => {
    setShopps(city.shopps);
  }, [city])


  return (
    <Wrapper>
      <Header>
        <Dropdown items={city.shopps} />
      </Header>

      {stores.map((item) => {
        if (item.id_loja > 0) {
          return (
            <Shopp key={item.id_loja}>
              <Box>
                <Left>
                  <span>{item.nome}</span>
                  <InfosShopp
                    address={`${item.endereco}, nº ${item.numero}, Bairro ${item.bairro}, ${item.cidade} - ${item.uf}`}
                    hours={item.periodo_atendimento1}
                    phone={`(${item.fone_ddd}) ${item.fone_numero}`} />
                  <Search id={item.id_loja} searchAddress={searchAddress} />
                </Left>
                {/* <Right src={item.url} alt={item.name} /> */}
              </Box>

              {/* {item.statusMap && origin && (
                <Map>
                  <GoogleMaps origin={origin} dest={item.destination} />
                </Map>)} */}
            </Shopp>
          )
        }
      })}
    </Wrapper >

  );
}
