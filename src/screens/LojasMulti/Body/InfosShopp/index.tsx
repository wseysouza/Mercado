import React from 'react';
import { LabelWithIcon } from '../../../../components/LabelWithIcon'

import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

import { Wrapper, TextBold } from './styles';

export interface InfosShoppProps {
  address: string,
  hours?: string,
  phone?: string,
}

export const InfosShopp = ({ address, hours, phone }: InfosShoppProps) => {
  return (
    <Wrapper>
      <LabelWithIcon icon={FaMapMarkerAlt} label={address} />
      {hours && <LabelWithIcon icon={FaClock} label={hours} />}
      <TextBold>
        <LabelWithIcon icon={FaPhoneAlt} label={phone} />
      </TextBold>
    </Wrapper>
  );
}


