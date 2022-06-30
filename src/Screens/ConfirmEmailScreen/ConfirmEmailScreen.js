import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

function ConfirmEmailScreen({navigation}) {
  const {control, handleSubmit, watch} = useForm();

  const username = watch('username');

  const onConfirmPressed = async data => {
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('LoginScreen');
    } catch (e) {
      Alert.alert('Oops!', e.message);
    }
  };
  const onResendCodePressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Success', 'Code was sent to your email');
    } catch (e) {
      Alert.alert('Oops!', e.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>Confirm Your Email</Text>
      </View>
      <CustomInput
        name="username"
        placeholder={'Username'}
        control={control}
        rules={{required: 'Username is required'}}
      />
      <CustomInput
        name="code"
        placeholder={'Confirmation code'}
        control={control}
        rules={{required: 'Please enter your confirmation code'}}
      />
      <View>
        <CustomButton onPress={handleSubmit(onConfirmPressed)} text="Confirm" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton
          onPress={() => navigation.navigate('LoginScreen')}
          text="Back to Sign In"
          type="TERTIARY"
        />
        <CustomButton
          onPress={onResendCodePressed}
          text="Resend Code"
          type="SECONDARY"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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

export default ConfirmEmailScreen;
