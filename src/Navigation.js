import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ConfirmEmailScreen from './Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import HomeScreen from './Screens/TabScreen';
import LoginScreen from './Screens/LoginScreen';
import NewPasswordScreen from './Screens/NewPasswordScreen';
import OnboardingScreen from './Screens/OnboardingScreen';
import RegisterScreen from './Screens/RegisterScreen';

function Navigation(props) {
  const Stack = createNativeStackNavigator();

  // Add theme={DarkTheme} to NavigationContainer for DarkTheme

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
