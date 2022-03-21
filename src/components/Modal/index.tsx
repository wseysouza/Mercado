import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { IoMdClose, IoMdCloseCircleOutline } from "react-icons/io";
import { IconBaseProps } from 'react-icons';
import {
  Content,
  Header,
  Body,
  Wrapper,
  IconLeft
} from "./styles";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  icon?: React.ComponentType<IconBaseProps>;
  children: string | React.ReactElement;
  widthModal?: number
}

export const Modal = ({ show, onClose, icon, children, widthModal = 0 }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const Icon = icon;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };


  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);


  useEffect(() => {
    const w = window;
    setWidth(w.innerWidth);
    setHeight(w.innerHeight);
  }, [])



  const modalContent = show ? (
    <Wrapper screenHeight={height} screenWidth={width} >
      <Body widthModal={widthModal}>
        <Header icon={icon}>
          {icon && (
            <IconLeft>
              <Icon />
            </IconLeft>
          )}
          <button type="button" onClick={handleCloseClick}>
            <IoMdClose />
          </button>
        </Header>
        <Content>
          {children}
        </Content>
      </Body>
    </Wrapper >
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
