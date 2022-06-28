import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

function NewPasswordScreen({navigation}) {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {
    console.warn('Submitted');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>Reset your Password</Text>
      </View>
      <View style={styles.textField}>
        <CustomInput
          placeholder={'Code'}
          value={code}
          setValue={setCode}
        />
      </View>
      <View style={styles.textField}>
        <CustomInput
          placeholder={'New Password'}
          value={newPassword}
          setValue={setNewPassword}
        />
      </View>
      <View>
        <CustomButton onPress={onSubmitPressed} text="SUBMIT" />
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

export default NewPasswordScreen;
