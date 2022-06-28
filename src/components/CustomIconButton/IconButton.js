import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function IconButton({onPress, type = 'PRIMARY', bgColor, fgColor}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.container,
          styles[`container_${type}`],
          bgColor ? {backgroundColor: bgColor} : {},
        ]}
        onPress={onPress}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 25,
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  container_PRIMARY: {
    backgroundColor: '#000',
  },
  container_TERTIARY: {},
});

export default IconButton;
