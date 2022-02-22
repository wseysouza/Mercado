import React, { useEffect } from 'react';
import { HeaderTab } from '@components/HeaderTab';
import { FaMapMarkerAlt, FaInstagram, FaPhoneAlt, FaFacebookF, FaRegClipboard } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdOutlinePolicy } from 'react-icons/md';

import { ContactBox, Header, LocalizationShopp, Phone } from './styles';
// import { Dropdown } from '@components/Dropdown';
import { LinkDefault } from '@components/links/LinkDefault'
import { colors } from '@styles/colors';
import { Container } from '@styles/theme';
import DropdownRowInfoAndContato from '@components/DropdownRowInfoAndContato';

import { useMulti } from "@hooks/multi";


export const Contato: React.FC = () => {

  const { getListParameterSite, parameterSite } = useMulti();

  useEffect(() => {
    getListParameterSite();
  }, [])

  return (
    <Container>
      <HeaderTab title="Contato" />
      <Header>
        <h1>Multi Contato</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </Header>

      <ContactBox>
        <LocalizationShopp>
          <FaMapMarkerAlt />
          <DropdownRowInfoAndContato label="Encontre a loja mais próxima" colorLabel={colors.nardoGray} />
        </LocalizationShopp>
        <Phone>
          <FaPhoneAlt />
          <a href={`tel:(${parameterSite.fone_ddd}) ${parameterSite.fone_numero}`}>{`(${parameterSite.fone_ddd}) ${parameterSite.fone_numero}`}</a>
        </Phone>
        <LinkDefault icon={FaRegClipboard} label={"Termos de Uso"} href="https://repos.multimercados.com.br/html/termo-de-uso.html" />
        <LinkDefault icon={FaFacebookF} label={"facebook.com/multimercados"} href={parameterSite.facebook} />
        <LinkDefault icon={MdOutlinePolicy} label={"Políticas de Privacidade"} href="https://repos.multimercados.com.br/html/politica-de-privacidade.html" />
        <LinkDefault icon={FaInstagram} label={"instagram.com/redemultimercados"} href={parameterSite.instagram} />
        <LinkDefault icon={FiMail} label={"atendimento@multimercados.com.br"} href={`mailto:${parameterSite.email}`} />
      </ContactBox>
    </Container>
  );
}

