import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

function NewPasswordScreen({navigation}) {

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmitPressed = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.password, data.code);
      navigation.navigate('LoginScreen');
    } catch (e) {
      Alert.alert('Oops!', e.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>Reset your Password</Text>
      </View>
        <CustomInput
          name='username'
          placeholder={'Username'}
          control={control}
          rules={{required: 'Username is Required'}}
        />
        <CustomInput
          name='code'
          placeholder={'Code'}
          control={control}
          rules={{required: 'Code is Required'}}
        />
        <CustomInput
        name="password"
        placeholder={'New Password'}
        secureTextEntry={true}
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 4,
            message: 'Password should be minimum 4 characters long',
          },
        }}
      />
      <View>
        <CustomButton onPress={handleSubmit(onSubmitPressed)} text="SUBMIT" />
      </View>
        <CustomButton
          onPress={() => navigation.navigate('LoginScreen')}
          text="BACK TO SIGN IN"
          type="TERTIARY"
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  legalText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
    marginTop: 2,
  },
  line: {
    width: '100%',
  },
  link: {
    color: '#0051ff',
  },
});

export default NewPasswordScreen;
