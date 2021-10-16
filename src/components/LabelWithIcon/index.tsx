import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Wrapper, Label, LabelIcon } from './styles';

interface LabelWithIconProps {
  label: string;
  icon: React.ComponentType<IconBaseProps>;
}

export const LabelWithIcon: React.FC<LabelWithIconProps> = ({ icon: Icon, label }) => {
  return (
    <Wrapper>
      <LabelIcon>
        {Icon && <Icon />}
      </LabelIcon>
      <Label>
        {label}
      </Label>
    </Wrapper>
  );
}
