import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function LineSeparator({text}) {
  return (
  <View>
    <View style={styles.separator} />
    <Text style={styles.text}>{text}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default LineSeparator;