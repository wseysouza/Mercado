import React, { useState, useEffect, useCallback } from 'react';

import { Container } from '@styles/theme';
import { HeaderTab } from '@components/HeaderTab';
import { Body } from './Body';
import { SideBar } from './SideBar';

import { Content } from './styles';

export const LojasMulti: React.FC = () => {
  const [cities, setCities] = useState([
    {
      id: '0', name: 'Bento Gonçalves', active: true, shopps: [
        { id: '0', statusMap: false, name: 'Encontre a loja mais próxima' },
        { id: '1', statusMap: false, name: 'Multi Lugana', destination: 'Rua José Rossini, nº 370, Bairro Santa Helena, Bento Gonçalves - RS', hours: 'Segunda à Sexta : 8h às 20h, Sábado: 9h às 20h, Domingo: 9h às 12h', phone: '(54) 99714-4666', url: 'images/multiLugama.jpg' },
        { id: '2', statusMap: false, name: 'Multi Maxi Compra', destination: 'Rua Jose Rosinni n 340', hours: 'Segunda a sexta: 8h as 22h', phone: '(54) 99714-4666', url: 'images/multiLugama.jpg' }]
    },
    { id: '1', name: 'Caxias do Sul', active: false, shopps: [{ id: '1', name: 'dfsdfsd', address: 'dsfsdfsdf', hours: 'sadasdasd', phone: '54 545454554', url: 'images/multiLugama.jpg' }] },
    { id: '2', name: 'Canela', active: false, shopps: [{ id: '1', name: 'dfsdfsd', address: 'dsfsdfsdf', hours: 'sadasdasd', phone: '54 545454554', url: 'images/multiLugama.jpg' }] },
    { id: '3', name: 'Farroupilha', active: false, shopps: [{ id: '1', name: 'dfsdfsd', address: 'dsfsdfsdf', hours: 'sadasdasd', phone: '54 545454554', url: 'images/multiLugama.jpg' }] },
    { id: '4', name: 'Flores da Cunha', active: false, shopps: [{ id: '1', name: 'dfsdfsd', address: 'dsfsdfsdf', hours: 'sadasdasd', phone: '54 545454554', url: 'images/multiLugama.jpg' }] },

  ])

  const [cityCurrent, setCityCurrent] = useState(cities[0]);


  const handleCity = useCallback((id: string) => {

    const newCitys = cities.map(city => {
      if (city.id === id) {
        setCityCurrent({ ...city, active: true })
        return { ...city, active: true }
      }
      return { ...city, active: false };
    })
    setCities(newCitys);
  }, [])


  useEffect(() => {}, [])

  return (
    <Container>
      <HeaderTab title="Lojas Multi" />
      <Content>
        <SideBar onPress={handleCity} cities={cities} />
        <Body city={cityCurrent} />
      </Content>
    </Container>
  );
}


