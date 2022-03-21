import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { HeaderTab } from '@components/HeaderTab';
import { FaMapMarkerAlt, FaInstagram, FaPhoneAlt, FaFacebookF, FaRegClipboard } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdOutlinePolicy } from 'react-icons/md';

import { ContactBox, Header, LocalizationShopp, Phone } from './styles';
import { LinkDefault } from '@components/links/LinkDefault'
import { colors } from '@styles/colors';
import { Container } from '@styles/theme';
import { DropdownRowInfoAndContato } from '@components/DropdownRowInfoAndContato';

import { useMulti } from "@hooks/multi";

export const Contato: React.FC = () => {
  const { getListParameterSite, parameterSite } = useMulti();

  useEffect(() => {
    getListParameterSite();
  }, [])


  return (
    <>
      {parameterSite && (<Container>
        <HeaderTab title="Contato" />
        <Header>
          <h1>Multi Contato</h1>
          <p>{parameterSite.textopaginacontato}</p>
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
          <LinkDefault icon={FaFacebookF} label={parameterSite.facebook} href={parameterSite.facebook} />
          <LinkDefault icon={MdOutlinePolicy} label={"Políticas de Privacidade"} href="https://repos.multimercados.com.br/html/politica-de-privacidade.html" />
          <LinkDefault icon={FaInstagram} label={parameterSite.instagram} href={parameterSite.instagram} />
          <LinkDefault icon={FiMail} label={parameterSite.email} href={`mailto:${parameterSite.email}`} />
        </ContactBox>
      </Container>)}
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const { parameterSite } = useMulti();

  return {
    props: {
      parameterSite
    },
    revalidate: 60 * 60 * 12,
  }
}
