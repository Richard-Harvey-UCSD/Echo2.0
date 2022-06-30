import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Alert, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import LineSeparator from '../../components/LineSeparator';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const EMAIL_REGEX =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function RegisterScreen({navigation}) {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const onSignUpPressed = async data => {
    const {username, password, email, name} = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, name},
      });
      navigation.navigate('ConfirmEmail')
    } catch (e) {
      Alert.alert('Oops!', e.message);
    }
  };
  const onSignInPressed = () => {};
  const onTOUPressed = () => {
    console.warn('Terms of Use Pressed');
  };
  const onPPPressed = () => {
    console.warn('Privacy Policy Pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>Create an account</Text>
      </View>
      <CustomInput
        name="name"
        placeholder={'Name'}
        control={control}
        rules={{
          required: 'Name is required',
        }}
      />
      <CustomInput
        name="username"
        placeholder={'Username'}
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters long',
          },
          maxLength: {
            value: 15,
            message: 'Username must be less then 15 characters long',
          },
        }}
      />
      <CustomInput
        name="email"
        placeholder={'Email'}
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
      />
      <CustomInput
        name="password"
        placeholder={'Password'}
        control={control}
        secureTextEntry
        rules={{
          required: 'Password is required',
          minLength: {
            value: 5,
            message: 'Password must be at least 5 characters long',
          },
        }}
      />
      <CustomInput
        name="confirmPassword"
        placeholder={'Confirm Password'}
        control={control}
        secureTextEntry
        rules={{
          required: 'Confirm Password',
          validate: value => value === pwd || 'Password does not match',
        }}
      />
      <View>
        <CustomButton onPress={handleSubmit(onSignUpPressed)} text="Register" />
        <Text style={styles.legalText}>
          By registering, you confirm that you accept our {'\n'}
          <Text onPress={onTOUPressed} style={styles.link}>
            Terms of Use
          </Text>{' '}
          and {''}
          <Text onPress={onPPPressed} style={styles.link}>
            Privacy Policy
          </Text>
          .
        </Text>
        <View>
          <View style={styles.line}>
            <LineSeparator text="or Sign Up with" />
          </View>
          <SocialSignInButtons />
        </View>
        <View style={{alignItems: 'center'}}>
          <CustomButton
            onPress={() => navigation.navigate('LoginScreen')}
            text="Have an Account? Sign In"
            type="TERTIARY"
          />
        </View>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 30,
    marginBottom: 15
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

export default RegisterScreen;
