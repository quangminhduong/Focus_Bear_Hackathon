import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import NavBar from './NavBar';
//import NavBar from './NavBar'

const Home = ({ handlePageChange }) => {
    const handleNavigateToFriends = () => {
      handlePageChange('friends');
    };

    const handleNavigateLogout = () => {
      handlePageChange('auth');
    }
  
    return (
        
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 50 }}>
        <View style={{flex: 1}} />
            

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 10 }}>
            <Button title="Home " onPress={() => {}} color={'black'}/>
            <View style={{width: 20}} />
            <Button title="Friends" onPress={handleNavigateToFriends} color={'#EA902B'}/>
            <View style={{width: 20}} />
            <Button title="Log Out" onPress={handleNavigateLogout} color={'#EA902B'}/>
        </View>
     </View>
    );
  };

export default Home;

