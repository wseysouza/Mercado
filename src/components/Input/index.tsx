import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Wrapper } from './styles';
import { StandaloneSearchBox, Autocomplete, AutocompleteProps } from "@react-google-maps/api";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {

  const inputRef = useRef(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',

    });
  }, [fieldName, registerField]);

  return (
    <Wrapper>
      <input ref={inputRef} {...rest} />
    </Wrapper>
  );
}

export default Input;
