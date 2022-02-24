import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';

import { Modal } from '@components/Modal';

import { Wrapper, Booklet } from './styles';

import { useMulti } from "@hooks/multi";

import Image from "next/image";


export const BtnDownload: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (status: boolean) => {
    status ? setShowModal(true) : setShowModal(false)
  }


  const { getListParameterSite, parameterSite } = useMulti();

  useEffect(() => {
    getListParameterSite();
  }, []);


  return (
    <Wrapper>
      <button type="button" onClick={() => handleModal(!showModal)}>
        <FaDownload />
        <span>ENCARTE PROMOCIONAL</span>
      </button>
      <Modal show={showModal} onClose={() => handleModal(!showModal)}>
        <Booklet>
          {parameterSite && (<iframe src={parameterSite.encarte} />)}
        </Booklet>
      </Modal>
    </Wrapper>
  );
};

