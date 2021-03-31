import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

export default function FormInput({ labelValue, placeholderText, ...rest }) {
  return (
    <TextInput
      value={labelValue}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor='#666'
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    paddingBottom:10,
    marginBottom: 8,
    width: windowWidth / 1.5,
    height: windowHeight / 16,
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection:'row',
  }
}); 