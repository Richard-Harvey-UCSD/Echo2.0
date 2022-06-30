import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            spellCheck={false}
            style={[styles.container, {borderColor: error ? 'red' : '#f0f0f0'}]}
          />
          {error && <Text style={{color: 'red', alignSelf: 'stretch', paddingStart: 40}}>{error.message || 'Error'}</Text>}
          </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    width: '90%',
    borderRadius: 25,
    flexDirection: 'row',
    borderWidth: 1.5,
    padding: 15,
    marginTop: 15,
    marginBottom: 5,
    borderColor: '#f0f0f0'
  },
});

export default CustomInput;
