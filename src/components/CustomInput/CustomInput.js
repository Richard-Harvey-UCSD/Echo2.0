import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const CustomInput = ({placeholder, value, setValue, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.textInput}
      value={value}
      placeholder={placeholder}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textField: {
      backgroundColor: '#e6e6e6',
      width: '90%',
      borderRadius: 25,
      flexDirection: 'row',
      padding: 15,
      marginTop: 20,
    },
  }
});

export default CustomInput;