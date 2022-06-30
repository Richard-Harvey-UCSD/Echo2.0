import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  Alert,
  useWindowDimensions,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import LineSeparator from '../../components/LineSeparator';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

function LoginScreen({navigation}) {
  const [loading, setLoading] = useState(false);

  const {height} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try{
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch(e) {
      Alert.alert('Oops!', e.message);
    }
    setLoading(false);
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

      <CustomInput
        name="username"
        placeholder={'Username'}
        control={control}
        rules={{required: 'Username is required'}}
      />

      <CustomInput
        name="password"
        placeholder={'Password'}
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
        <CustomButton onPress={handleSubmit(onSignInPressed)} text={loading ? 'Loading...' : 'Sign In'} />
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
});

export default LoginScreen;
