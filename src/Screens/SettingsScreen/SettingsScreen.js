import {Auth} from 'aws-amplify';
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

function SettingsScreen() {
  const onSignOut = () => {
    Auth.signOut();
  }
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <CustomButton
        onPress={onSignOut}
        fgColor="#fff"
        text="Sign Out"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
