import React from 'react';

import { IconBaseProps } from 'react-icons';

import { Wrapper, Label, LabelIcon } from './styles';

interface LinkDefaultProps {
  href: string;
  label: string | object;
  icon: React.ComponentType<IconBaseProps>;
}

export const LinkDefault: React.FC<LinkDefaultProps> = ({ icon: Icon, label, href }) => {
  return (
    <Wrapper>
      <LabelIcon>
        {Icon && <Icon />}
      </LabelIcon>
      <Label href={href} target="_blank">
        {label}
      </Label>
    </Wrapper>
  );
}

