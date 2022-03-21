import React, { useEffect, useState } from 'react';

import { Button } from '@components/Button';

import { Wrapper, Content } from './styles';

export const LGPD: React.FC = () => {
  const [windowCurrent, setWindowCurrent] = useState(null)
  const [enableOrDisable, setEnableOrDisable] = useState(Boolean(windowCurrent !== null && windowCurrent.localStorage.getItem('multiLGPD')));

  const enableOrDisableAllCookies = (value: string) => {
    if (value === "aceitar todos") {
      setEnableOrDisable(Boolean(windowCurrent !== null && windowCurrent.localStorage.setItem('multiLGPD', 'true')));

    } else if (value === "rejeitar todos") {
      setEnableOrDisable(Boolean(windowCurrent !== null && windowCurrent.localStorage.setItem('multiLGPD', 'false')));

    }
  }

  useEffect(() => {
    setWindowCurrent(window);
  }, [])

  return (
    enableOrDisable && (
      <Wrapper>
        <Content>
          <p>Este site faz uso de cookies para melhorar sua experiência de navegação.</p>
          <Button type="button" enableOrDisableAllCookies={enableOrDisableAllCookies} title="aceitar todos" />
          <Button type="button" enableOrDisableAllCookies={enableOrDisableAllCookies} title="rejeitar todos" />
        </Content>
      </Wrapper>
    )
  );
};
