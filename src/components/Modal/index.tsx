import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  Content,
  Header,
  Body,
  Wrapper
} from "./styles";

export const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <Wrapper>
      <Body>
        <Header>
          {title && <h2>{title}</h2>}

          <button type="button" onClick={handleCloseClick}>
            x
          </button>
        </Header>
        <Content>
          {children}
        </Content>
      </Body>
    </Wrapper>
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
