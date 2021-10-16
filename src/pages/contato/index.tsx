import React from 'react';
import { HeaderTab } from '@components/HeaderTab';
import { FaMapMarkerAlt, FaInstagram, FaPhoneAlt, FaFacebookF, FaRegClipboard } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdOutlinePolicy } from 'react-icons/md';
import { BiQuestionMark } from 'react-icons/bi';

import { Wrapper, ContactBox } from './styles';
import { NearestStore } from '../../components/NearestStore';
import { LinkDefault } from '../../components/LinkDefault'


const contato: React.FC = () => {

  return (
    <Wrapper>
      <HeaderTab title="contato" />

      <h1>Multi Contato</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore.</p>

      <ContactBox>
        <div>
          <span><FaMapMarkerAlt /></span>
          <NearestStore id={[]} text="Encontre a loja mais próxima" select={["sdsfsd"]} />
        </div>
        <div>
          <span><FaPhoneAlt /></span>
          <strong>(54) 3211-3230</strong>
        </div>
        <LinkDefault icon={BiQuestionMark} label={"Dúvidas Frequentes"} href="#" />
        <LinkDefault icon={FiMail} label={"atendimento@multimercados.com.br"} href="#" />
        <LinkDefault icon={FaRegClipboard} label={"Termos de Uso"} href="#" />
        <LinkDefault icon={FaFacebookF} label={"facebook.com/multimercados"} href="https://www.facebook.com/" />
        <LinkDefault icon={MdOutlinePolicy} label={"Políticas de Privacidade"} href="#" />
        <LinkDefault icon={FaInstagram} label={"instagram.com/redemultimercados"} href="https://www.instagram.com/" />
      </ContactBox>
    </Wrapper>
  );
}

export default contato;
