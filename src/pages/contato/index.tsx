import React from 'react';
import { HeaderTab } from '@components/HeaderTab';
import { FaMapMarkerAlt, FaInstagram, FaPhoneAlt, FaFacebookF, FaRegClipboard } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdOutlinePolicy } from 'react-icons/md';
import { BiQuestionMark } from 'react-icons/bi';

import { Header, ContactBox, LocalizationShopp, Phone } from './styles';
import { Dropdown } from '@components/Dropdown';
import { LinkDefault } from '../../components/LinkDefault'
import { colors } from '@styles/colors';
import { Container } from '@styles/theme';


const contato: React.FC = () => {

  return (
    <Container>
      <HeaderTab title="contato" />
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
          <Dropdown label="Encontre a loja mais próxima" colorLabel={colors.nardoGray} items={[
            { id: "0", name: 'Multi Salvador - 54 3222-2343', selected: true },
            { id: "1", name: 'Ketchup', selected: false },
            { id: "2", name: 'Barbecue', selected: false },
          ]} />
        </LocalizationShopp>
        <Phone>
          <FaPhoneAlt />
          <span>(54) 3211-3230</span>
        </Phone>
        <LinkDefault icon={BiQuestionMark} label={"Dúvidas Frequentes"} href="#" />
        <LinkDefault icon={FiMail} label={"atendimento@multimercados.com.br"} href="#" />
        <LinkDefault icon={FaRegClipboard} label={"Termos de Uso"} href="#" />
        <LinkDefault icon={FaFacebookF} label={"facebook.com/multimercados"} href="https://www.facebook.com/" />
        <LinkDefault icon={MdOutlinePolicy} label={"Políticas de Privacidade"} href="#" />
        <LinkDefault icon={FaInstagram} label={"instagram.com/redemultimercados"} href="https://www.instagram.com/" />
      </ContactBox>
    </Container>
  );
}

export default contato;
