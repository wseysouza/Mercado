import React, { useState } from 'react';

import { Button } from '@components/Button';

import { Wrapper, Content } from './styles';
import { colors } from '@styles/colors';

export const LGPD: React.FC = () => {

  const [enableOrDisable, setEnableOrDisable] = useState(true)

  const enableOrDisableAllCookies = (value: string) => {
    if (value === "aceitar todos") {
      setEnableOrDisable(false)
    } else if (value === "rejeitar todos") {
      setEnableOrDisable(false)
    } else {

    }
  }

  return (
    enableOrDisable && (
      <Wrapper>
        <Content>
          <p>Este site faz uso de cookies para melhorar sua experiência de navegação.</p>
          <Button type="button" enableOrDisableAllCookies={enableOrDisableAllCookies} title="aceitar todos" />
          <Button type="button" enableOrDisableAllCookies={enableOrDisableAllCookies} title="rejeitar todos" />
          <Button type="button" enableOrDisableAllCookies={enableOrDisableAllCookies} title="personalizar" backgroundColor="transparent" titleColor={colors.secondary} />
        </Content>
      </Wrapper>
    )
  );
};
