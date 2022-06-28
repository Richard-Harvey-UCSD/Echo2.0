import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function OnboardingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.buttonContainer}>
      <View style={{flex: 1}}>
        <Image
          style={{height: 350, width: 350}}
          source={require('../../../assets/images/Echo.png')}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2a2c2e',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2c2e',
    borderRadius: 20,
    bottom: 0,
  },
  loginButton: {
    backgroundColor: '#fff',
    width: 370,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    bottom: 90,
    position: 'absolute',
  },
  registerButton: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    height: 40,
    borderRadius: 20,
    // marginTop: 15,
    bottom: 30,
    position: 'absolute',
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default OnboardingScreen;
