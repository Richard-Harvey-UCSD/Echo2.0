import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function EchosScreen(props) {
  return (
    <View style={styles.container}>
      <Text>EchosScreen</Text>
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

export default EchosScreen;
