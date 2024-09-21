import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DataTable from './DataTable.tsx';
import { RequestFriend } from './RequestFriend.tsx';

const Friends = ({ handlePageChange }) => {
    const handleNavigateToHome = () => {
        handlePageChange('home');
      };
  
      const handleNavigateLogout = () => {
        handlePageChange('auth');
      }
    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', left: -40, top: 150, width: 350, justifyContent: 'center', alignItems: 'center'}}>
                <DataTable/>
                <View style={{width: 40}} />
                <RequestFriend/>
            </View>

            <View style={{flex: 1}} />
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 10 }}>
                <Button title="Home " onPress={handleNavigateToHome} color={'#EA902B'}/>
                <View style={{width: 20}} />
                <Button title="Friends" onPress={() => {}} color={'black'}/>
                <View style={{width: 20}} />
                <Button title="Log Out" onPress={handleNavigateLogout} color={'#EA902B'}/>
            </View>
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
    }
})

export default Friends;


