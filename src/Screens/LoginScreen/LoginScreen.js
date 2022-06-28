import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import LineSeparator from '../../components/LineSeparator';

function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  const onSignUpPressed = () => {
    console.warn('Sign Up');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundColor}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/Echo.png')}
        />
      </View>
      <View style={styles.textField}>
        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />
      </View>
      <View style={styles.textField}>
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View>
        <CustomButton onPress={() => navigation.navigate('HomeScreen')} text="LOGIN" />
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <CustomButton
            onPress={() => navigation.navigate('ForgotPassword')}
            text="Forgot Password?"
            type="TERTIARY"
          />
          <CustomButton
            onPress={() => navigation.navigate('RegisterScreen')}
            text="CREATE ACCOUNT"
            type="SECONDARY"
          />
        </View>
        <View style={{marginTop: 5}}>
          <LineSeparator text="OR" />
        </View>
        <SocialSignInButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundColor: {
    backgroundColor: '#000',
    borderRadius: 20,
    height: 150,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  image: {
    height: 200,
    width: 200,
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
});

export default LoginScreen;
