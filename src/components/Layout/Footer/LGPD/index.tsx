import React, { useEffect, useState } from 'react';

import { Button } from '@components/Button';

import { Wrapper, Content } from './styles';

export const LGPD: React.FC = () => {

  const [enableOrDisable, setEnableOrDisable] = useState(false);
  const [lsContent, setLsContent] = useState("");

  useEffect(() => {
    const content = localStorage.getItem("multiLGPD");
    setLsContent(content)
  }, []);

  useEffect(() => {
    if (!Boolean(lsContent)) {
      setEnableOrDisable(true)
    } else {
      setEnableOrDisable(false)
    }
  }, [lsContent])

  const enableOrDisableAllCookies = (value: string) => {
    if (value === "aceitar todos") {
      localStorage.setItem('multiLGPD', '123')
      setEnableOrDisable(false)
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
