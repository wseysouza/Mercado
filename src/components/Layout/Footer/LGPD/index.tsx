import React from 'react';

import { Button } from '@components/Button';

import { Wrapper } from './styles';
import { colors } from '@styles/colors';

export const LGPD: React.FC = () => {
  return (
    <Wrapper>
      <p>Este site faz uso de cookies para melhorar sua experiência de navegação.</p>
      <Button type="button" title="aceitar todos" />
      <Button type="button" title="rejeitar todos" />
      <Button type="button" title="personalizar" backgroundColor="transparent" titleColor={colors.secondary} />
    </Wrapper>
  );
};
