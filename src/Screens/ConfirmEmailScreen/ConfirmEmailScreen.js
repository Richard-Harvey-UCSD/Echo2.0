import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

function ConfirmEmailScreen({navigation}) {
  const [code, setCode] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign In');
  };
  const onResendCodePressed = () => {
    console.warn('Resent Code');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>Confirm Your Email</Text>
      </View>
      <View style={styles.textField}>
        <CustomInput
          placeholder={'Enter your confirmation code'}
          value={code}
          setValue={setCode}
        />
      </View>
      <View>
        <CustomButton onPress={onSignInPressed} text="Register" />
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
    backgroundColor: '#fff',
  },
  text: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    backgroundColor: '#e6e6e6',
    width: '90%',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginTop: 20,
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
