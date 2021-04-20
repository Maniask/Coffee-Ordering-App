import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const AddButton = (props) => (
  <TouchableOpacity onPress={props.onPress} style={[styles.buttonContainer, props.style]}>
    <Text style={[styles.buttonText, props.textStyle]}>{props.buttonTitle}</Text>
  </TouchableOpacity>
);

export default AddButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: windowWidth / 4,
    height: windowHeight / 17,
    backgroundColor: 'gray',
    padding: 6,
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 15,
    left:-25,
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  }
});