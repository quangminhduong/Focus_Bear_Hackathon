import React from 'react';
import { View, StyleSheet } from 'react-native';
import HelloWorld from './components/HelloWorld';

const App = () => {
  return (
    <View style={styles.container}>
      <HelloWorld />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
