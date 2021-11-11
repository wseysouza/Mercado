import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

import { Modal } from '@components/Modal';

import { Wrapper, Booklet } from './styles';

export const BtnDownload: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (status: boolean) => {
    status ? setShowModal(true) : setShowModal(false)
  }

  return (
    <Wrapper>
      <button type="button" onClick={() => handleModal(!showModal)}>
        <FaDownload />
        <span>ENCARTE PROMOCIONAL</span>
      </button>
      <Modal show={showModal} onClose={() => handleModal(!showModal)}>
        <Booklet>
          <img src="/images/booklet.jpg" alt="" />
        </Booklet>
      </Modal>
    </Wrapper>
  );
};

