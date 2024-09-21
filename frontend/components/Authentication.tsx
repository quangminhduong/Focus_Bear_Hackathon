import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AuthenticationPage = ({ handlePageChange }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('#EA902B');
  const [inputBorderColor, setInputBorderColor] = useState('#EA902B');

  const testUsername = 'registered@gmail.com' // for testing ui logic

  const handleSubmit = async () => {
    try {
      if (name == testUsername){
        setMessage('Valid email address')
        setMessageColor('#EA902B')
        setInputBorderColor('#EA902B')
        handleNavigateToFriends()
      }
      else {
        setMessage('Error: Invalid email address')
        setMessageColor('red')
        setInputBorderColor('red')
      }
    } catch (error) {
      setMessage('Error in API call: ' + error.message);
      setMessageColor('red');
      setInputBorderColor('red')
    }
  };

  const handleNavigateToFriends = () => {
    handlePageChange('home');
  }

  const handleSignUp = async () => {
    try {
      if (name != testUsername){ // add backend logic to check if email is already registered
        setMessage('Valid email address')
        setMessageColor('#EA902B')
        setInputBorderColor('#EA902B')
        handleNavigateToFriends()

      } else {
        setMessage('Error: email address already registered')
        setMessageColor('red')
        setInputBorderColor('red')
      }
    }
    catch (error) {
      setMessage('Error in API call: ' + error.message); // Log errors for debugging
      setMessageColor('red')
      setInputBorderColor('red')
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width : 300, height: 40, borderColor: inputBorderColor, borderWidth: 1, marginBottom: 20, color:'black' }}
        placeholder="Enter your email"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text style={[styles.message, {color: messageColor}]}>{message}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 150 }}>
        <Button title="Sign Up" onPress={handleSignUp} color="#EA902B" />
        <Button title="Log In" onPress={handleSubmit} color="#EA902B"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 16,
    marginBottom: 20,
  }
});

export default AuthenticationPage;