import { colors } from '@styles/colors';
import React, { useState } from 'react';

import { ListBox, Banner, Left, Right, Image } from './styles';

const Banners: React.FC = () => {
  const [banners, setBanners] = useState([
    { id: 1, url: 'images/banners/banner1.png', weekDay: "Segunda e Terça", title: "HORTIFRUTI", color: "#d68b36" },
    { id: 2, url: 'images/banners/banner2.jpg', weekDay: "Quarta", title: "SÓ HOJE!", color: "#8B7956" },
    { id: 3, url: 'images/banners/banner3.jpg', weekDay: "Quinta", title: "CORTES ESPECIAIS", color: '#9e6262' },
    { id: 4, url: 'images/banners/banner4.jpg', weekDay: "Sexta e Sábado", title: "OFERTAS MULTI", color: "#352506" },
  ])
  return (
    <ListBox>
      {banners.map(({ id, url, weekDay, title, color }) =>
        <Banner key={id}>
          <Left color={color}>
            <h3>{weekDay}</h3>
            <h1>{title}</h1>
          </Left>
          <Right>
            <Image src={url} />
          </Right>
        </Banner>)
      }
    </ListBox >
  );
}

export default Banners;
