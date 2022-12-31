import * as React from 'react';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
  const { label, onChangeText, value } = props;
  return (
    <TextInput
      theme={{roundness: 5}}
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
    />
  );
};

export default Input;