import { Modal } from '@components/Modal';
import { useMulti } from '@hooks/multi';
import React, { ReactElement, useEffect, useState } from 'react';

import { Wrapper, Content } from './styles';

interface LinkProps {
  href?: string;
  target?: string;
  children?: string | ReactElement;
}

export const LinkSimple = ({ href, target, children }: LinkProps) => {

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
    <>
      {children === "Termos de Uso" || children === "Políticas de Privacidade" ?
        (
          <div>
            <Content onClick={() => handleModal(!showModal, children)}>
              {children}
            </Content>
          </div>
        ) : (
          <Wrapper href={href} passHref>
            <Content target={target}>
              {children}
            </Content>
          </Wrapper>
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
    </>
  );
};
