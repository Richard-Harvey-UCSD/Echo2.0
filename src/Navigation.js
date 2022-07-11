import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import ConfirmEmailScreen from './Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import HomeScreen from './Screens/TabScreen';
import LoginScreen from './Screens/LoginScreen';
import NewPasswordScreen from './Screens/NewPasswordScreen';
import OnboardingScreen from './Screens/OnboardingScreen';
import RegisterScreen from './Screens/RegisterScreen';
import {Auth, Hub} from 'aws-amplify';
import {ActivityIndicator, View} from 'react-native';

const Stack = createNativeStackNavigator();

function Navigation(props) {
  const [user, setUser] = useState(undefined);
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color='#000'/>
      </View>
    );
  }

  // Add theme={DarkTheme} to NavigationContainer for DarkTheme

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
