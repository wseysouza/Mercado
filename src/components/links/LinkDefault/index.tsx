import React, { useEffect, useState } from 'react';

import { IconBaseProps } from 'react-icons';

import { Modal } from "@components/Modal";

import { Wrapper, Label, LabelIcon } from './styles';

import { useMulti } from "@hooks/multi";

interface LinkDefaultProps {
  href: string;
  label: string | object;
  icon: React.ComponentType<IconBaseProps>;
}

export const LinkDefault: React.FC<LinkDefaultProps> = ({ icon: Icon, label, href }) => {

  const [showModal, setShowModal] = useState(false);

  const [options, setOptions] = useState(null);

  const handleModal = (status: boolean, label: "Termos de Uso" | "Políticas de Privacidade") => {
    status ? setShowModal(true) : setShowModal(false)
    setOptions(label)
  }


  const { getListTerms, terms } = useMulti();

  useEffect(() => {
    getListTerms();
  }, [])


  return (
    <Wrapper>
      <LabelIcon>
        {Icon && <Icon />}
      </LabelIcon>

      {label === "Termos de Uso" || label === "Políticas de Privacidade" ?
        (
          <Label onClick={() => handleModal(!showModal, label)} >
            {label}
          </Label>
        ) : (
          <Label href={href} target="_blank">
            {label}
          </Label>
        )
      }

      <Modal show={showModal} onClose={() => handleModal(!showModal, null)}>

        {terms && (options === 'Termos de Uso' ? (
          <>
            <h3>{terms.termouso_titulo}</h3>
            <span>{terms.termouso_texto}</span>
          </>
        ) : (
          <>
            <h3>{terms.politicaprivacidade_titulo}</h3>
            <span>{terms.politicaprivacidade_texto}</span>
          </>
        ))}

      </Modal>

    </Wrapper>
  );
}

