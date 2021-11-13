import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Tab } from '@components/Layout/NavBar/Tab';
import { Wrapper } from './styles';

export const NavBar: React.FC = () => {
  const { asPath } = useRouter()

  return (
    <Wrapper>
      <Tab href="/home" name="Home" active={asPath === "/home" || asPath === "/"} />
      <Tab href="/institucional" name="Institucional" active={asPath === "/institucional"} />
      <Tab href="/lojasmulti" name="Lojas Multi" active={asPath === "/lojasmulti"} />
      <Link href="/home">
        <a>
          <img src="images/logo_big.png" alt="Italian Trulli" width="137px" />
        </a>
      </Link>
      <Tab href="/marcapropria" name="Marca Própria" active={asPath === "/marcapropria"} />
      <Tab href="/contato" name="Contato" active={asPath === "/contato"} />
      <Tab href="https://kretos.cc" workWithUs="https://kretos.cc" target="_blank" name="Trabalhe Conosco" active={asPath === "/trabalheconosco"} />
    </Wrapper>
  );
}
