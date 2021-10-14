import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.expected}>proper dashed</Text>
      <Text style={styles.bug}>solid even though added dashed but no borderRadius</Text>
      <Text style={styles.bugTwo}>solid even though added dashed added borderRadius as 0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expected: {
    padding: 20,
    marginBottom: 20,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  bug: {
    padding: 20,
    marginBottom: 20,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  bugTwo: {
    padding: 20,
    marginBottom: 20,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 0,
  },
});
