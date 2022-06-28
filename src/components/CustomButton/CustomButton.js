import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}
      onPress={onPress}>
      <Text style={[styles.text, styles[`text_${type}`],
        fgColor ? {color: fgColor} : {},]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    borderRadius: 25,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_PRIMARY: {
    backgroundColor: '#000',
  },
  container_SECONDARY: {
    width: 175,
    borderColor: '#000',
    borderWidth: 2,
  },
  container_TERTIARY: {
    width: 175,
    //backgroundColor: '#000'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  text_SECONDARY: {
    color: '#000',
    fontSize: 12,
  },
  text_TERTIARY: {
    color: '#000',
    fontSize: 12,
  },
});

export default CustomButton;
