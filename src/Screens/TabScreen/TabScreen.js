import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../SettingsScreen';
import EchosScreen from '../EchosScreen';
import CardsScreen from '../CardsScreen';
import QuotesScreen from '../QuotesScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabIndex(props) {
  return (
    <Tab.Navigator
      
      initialRouteName="Cards"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          

          if (route.name === 'Cards') {
            iconName = focused ? 'ios-albums' : 'ios-albums-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings-sharp' : 'ios-settings-outline';
          } else if (route.name === 'Echos') {
            iconName = focused ? 'ios-people' : 'ios-people-outline';
          } else if (route.name === 'Quotes') {
            iconName = focused
              ? 'ios-chatbubble-ellipses'
              : 'ios-chatbubble-ellipses-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Echos"
        component={EchosScreen}
        options={{
          headerShown: false,
          
        }}
      />
      <Tab.Screen
        name="Quotes"
        component={QuotesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
