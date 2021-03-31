import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const FormButton = (props) => (
  <TouchableOpacity onPress={props.onPress} style={[styles.buttonContainer, props.style]}>
    <Text style={[styles.buttonText, props.textStyle]}>{props.buttonTitle}</Text>
  </TouchableOpacity>
);

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: windowWidth / 2,
    height: windowHeight / 16,
    backgroundColor: '#79443B',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  }
});