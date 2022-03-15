import React, { useEffect, useState } from "react";

import { Wrapper, Header, Box, Left, Right, Map, Shopp } from "./styles";
import { InfosShopp } from './InfosShopp';
import { Search } from './Search';
import { Dropdown } from '@components/Dropdown';
import { GoogleMaps } from '@components/GoogleMaps'

import Image from 'next/image';

import { useMulti } from "@hooks/multi";

import { useRouter } from 'next/router';


export const Body = () => {

  const {
    stores,
    cityCurrent,
    dropdown,
    getListStores,
  } = useMulti();

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/lojasmulti" || router.asPath === "/lojasmulti#main") {
      getListStores({ cidade: cityCurrent });
      router.push("/lojasmulti")
    } else {
      router.push("/lojasmulti")
    }
  }, [cityCurrent])

  useEffect(() => {
    router.push("/lojasmulti")
  }, [stores])




  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);

  const [openMap, setOpenMap] = useState(0);

  //endereço digitado na search esta no data
  const searchAddress = (data) => {

    setOrigin(data.address)

    setOpenMap(data.id);
  }

  return (
    <Wrapper>
      <Header>
        <Dropdown items={dropdown} />
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
                    hours={item.periodo_atendimento1 && (`${item.periodo_atendimento1}, das ${item.horario_atendimento1}`)}
                    phone={`(${item.fone_ddd}) ${item.fone_numero}`} />

                  <Search id={item.id_loja} searchAddress={searchAddress} />
                </Left>
                <Right>
                  {item.imagem && (<Image className="img" src={item.imagem} alt={item.nome} layout='fill' />)}
                </Right>
              </Box>

              {openMap === item.id_loja && origin && (
                <Map>
                  <GoogleMaps origin={origin} dest={`${item.endereco}, nº ${item.numero}, Bairro ${item.bairro}, ${item.cidade} - ${item.uf}`} />
                </Map>)
              }
            </Shopp>
          )
        }
      })}
    </Wrapper >

  );
}
