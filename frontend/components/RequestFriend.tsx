import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

export const RequestFriend = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/request-friend', { email });

      if (!response.data.success) {
        throw new Error('Failed to send request');
      }

      const data = response.data;
      alert(`Request sent to ${data.email}`);
    } catch (error) {
      console.error(error);
      alert('Failed to send request');
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        placeholder="Request a friend"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ width: 150, marginHorizontal: 10 }}
      />
      <Button title="  +  " onPress={handleSubmit} />
    </View>
  );
};

