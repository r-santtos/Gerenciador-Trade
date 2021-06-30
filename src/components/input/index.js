import React from 'react';
import {TextInput} from 'react-native';

import { maskCurrency } from '../../tools/mask';

function Input({inputMaskChange, ...rest}) {
  function hadledChange(text) {
    const value = maskCurrency(text);
    inputMaskChange(value);
  }
  return (
    <>
      <TextInput
        onChangeText={(text) => hadledChange(text)}{...rest}
      />
    </>
  );
}

export default Input;