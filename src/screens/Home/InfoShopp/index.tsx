
import React, { useState } from 'react';
import { BsCalendarCheck } from 'react-icons/bs';

import { Modal } from '@components/Modal';

import { Wrapper } from './styles';
import { StoresOpen } from './StoresOpen';

export const InfoShopp: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (status: boolean) => {
    status ? setShowModal(true) : setShowModal(false)
  }

  return (
    <Wrapper>
      CONFIRA
      <button type="button" onClick={() => handleModal(!showModal)}>AQUI</button>
      AS LOJAS
      <strong>ABERTAS AOS DOMINGOS!</strong>

      <Modal show={showModal} icon={BsCalendarCheck} onClose={() => handleModal(!showModal)}>
        <StoresOpen />
      </Modal>
    </Wrapper >
  );
};
