
import React, { useState } from 'react';
import { Modal } from '@components/Modal';

import { Wrapper } from './styles';

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

      <Modal show={showModal} onClose={() => handleModal(!showModal)} title="test">
        <h2>dfsdfsdf</h2>
      </Modal>
    </Wrapper >
  );
};
