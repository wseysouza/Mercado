import React, { useState } from 'react';

import { ListBox, Banner, Left, Right, Image } from './styles';

const Banners: React.FC = () => {
  const [banners, setBanners] = useState([
    { id: 1, url: 'images/banners/banner1.png', weekDay: "Segunda e Terça", title: "HORTIFRUTI" },
    { id: 2, url: 'images/banners/banner2.jpg', weekDay: "Quarta", title: "SÓ HOJE!" },
    { id: 3, url: 'images/banners/banner3.jpg', weekDay: "Quinta", title: "CORTES ESPECIAIS" },
    { id: 4, url: 'images/banners/banner4.jpg', weekDay: "Sexta e Sábado", title: "OFERTAS MULTI" },
  ])
  return (
    <ListBox>
      {banners.map(({ id, url, weekDay, title }) =>
        <Banner key={id}>
          <Left>
            <h3>{weekDay}</h3>
            <h1>{title}</h1>
          </Left>
          <Right>
            <Image src={url} />
          </Right>
        </Banner>)}
    </ListBox>
  );
}

export default Banners;
