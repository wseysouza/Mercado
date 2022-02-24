import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Tab } from '@components/Layout/NavBar/Tab';
import { Wrapper } from './styles';

import { useMulti } from "@hooks/multi";

export const NavBar: React.FC = () => {

  const { route } = useRouter()

  const { getListParameterSite, parameterSite } = useMulti();

  useEffect(() => {
    getListParameterSite();
  }, [])


  return (
    <Wrapper>
      <Tab href="/home#main" name="Home" active={route === "/" || route === "/home"} />
      <Tab href="/institucional#main" name="Institucional" active={route === "/institucional"} />
      <Tab href="/lojasmulti#main" name="Lojas Multi" active={route === "/lojasmulti"} />
      <Link href="/home#main">
        <a>
          <img src="images/logo_big.png" alt="Italian Trulli" width="137px" />
        </a>
      </Link>
      <Tab href="/marcapropria#main" name="Marca Própria" active={route === "/marcapropria"} />
      <Tab href="/contato#main" name="Contato" active={route === "/contato"} />
      {parameterSite && (<Tab href={parameterSite.url_trabalheconosco} workWithUs={parameterSite.url_trabalheconosco} target="_blank" name="Trabalhe Conosco" active={route === "/trabalheconosco"} />)}
    </Wrapper>
  );
}
