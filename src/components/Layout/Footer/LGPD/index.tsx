import React, { useState } from 'react';

import { Button } from '@components/Button';

import { Wrapper, Content } from './styles';

export const LGPD: React.FC = () => {

  const [enableOrDisable, setEnableOrDisable] = useState(
    Boolean(window.localStorage.getItem('multiLGPD'))
  )

  const enableOrDisableAllCookies = (value: string) => {
    if (value === "aceitar todos") {
      window.localStorage.setItem('multiLGPD', 'true');
    } else if (value === "rejeitar todos") {
      window.localStorage.setItem('multiLGPD', 'false');
    }
  }

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
