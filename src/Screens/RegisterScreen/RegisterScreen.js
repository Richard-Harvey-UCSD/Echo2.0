import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import LineSeparator from '../../components/LineSeparator';
import SocialSignInButtons from '../../components/SocialSignInButtons';

function RegisterScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign In');
  };
  const onTOUPressed = () => {
    console.warn('Terms of Use Pressed');
  };
  const onPPPressed = () => {
    console.warn('Privacy Policy Pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>Create an account</Text>
      </View>
      <View style={styles.textField}>
        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />
      </View>
      <View style={styles.textField}>
        <CustomInput placeholder={'Email'} value={email} setValue={setEmail} />
      </View>
      <View style={styles.textField}>
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.textField}>
        <CustomInput
          placeholder={'Confirm Password'}
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>
      <View>
        <CustomButton
          onPress={() => navigation.navigate('ConfirmEmail')}
          text="Register"
        />
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
        <View style={{ alignItems: 'center' }}>
          <CustomButton
            onPress={() => navigation.navigate('LoginScreen')}
            text="Have an Account? Sign In"
            type="TERTIARY"
          />
        </View>
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

export default RegisterScreen;
