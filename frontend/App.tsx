import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Authentication from './components/Authentication'
import Home from './components/Home'
import Friends from './components/Friends'
import Watermark from './components/Watermark';

const App = () => {
  const [page, setPage] = useState('auth');
  const handlePageChange = (newPage: string) => {
    setPage(newPage);
  };
  return (
    <View style={styles.container}>
      <Watermark/>
      {page === 'home' && <Home handlePageChange={handlePageChange} />}
      {page === 'friends' && <Friends handlePageChange={handlePageChange} />}
      {page === 'auth' && <Authentication handlePageChange={handlePageChange} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff5e9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

