import { HeaderTab } from '@components/HeaderTab';
import React from 'react';

import { Container, Row } from './styles';
import { SideBar } from './SideBar';
import { Body } from './Body';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Img } from '../../assets/MultiLugama.jpg';


const lojasmulti: React.FC = () => {
  const [citys, setCitys] = useState([
    { id: '0', name: 'Bento Gonçalves', active: true, shopps: [{ id: '0', name: 'Multi Lugana', address: 'Rua Jose Rosinni n 340', hours: 'Segunda a sexta: 8h as 22h', phone: '(54) 99714-4666', Image: (`${Img}`) }] },
    { id: '1', name: 'Caxias do Sul', active: false, shopps: [{ id: '1', name: 'dfsdfsd', address: 'dsfsdfsdf', hours: 'sadasdasd', phone: '54 545454554' }] },
    { id: '2', name: 'Canela', active: false, shopps: [{ id: '2', name: 'dfsdfsd', address: 'dsfsdfsdf', hours: 'sadasdasd', phone: '54 545454554' }] },
    { id: '3', name: 'Farroupilha', active: false, shopps: [{ id: '3', name: 'dfsdfsd', address: 'dsfsdfsdf', hours: 'sadasdasd', phone: '54 545454554' }] },
    { id: '4', name: 'Flores da Cunha', active: false, shopps: [{ id: '4', name: 'dfsdfsd', address: 'dsfsdfsdf', hours: 'sadasdasd', phone: '54 545454554' }] },

  ])

  const [cityCurrent, setCityCurrent] = useState(citys[0]);


  const handleCity = useCallback((id: string) => {

    const newCitys = citys.map(city => {
      if (city.id === id) {
        setCityCurrent({ ...city, active: true })
        return { ...city, active: true }
      }
      return { ...city, active: false };
    })

    console.log(newCitys)

    setCitys(newCitys);
  }, [])


  useEffect(() => {}, [])

  return (
    <Container>
      <HeaderTab title="lojasmulti" />
      <Row>
        <SideBar onPress={handleCity} tabList={citys} />
        <Body city={cityCurrent} />
      </Row>
    </Container>
  );
}

export default lojasmulti;
