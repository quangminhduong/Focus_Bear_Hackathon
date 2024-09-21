import React from 'react';
import {Text, View} from 'react-native';

const Watermark = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
      }}>
      <Text>Monash Focus Bear Hackathon 2024</Text>
      <Text>Challange: Friend Streak               Team: FF@15</Text>
      <Text></Text>
    </View>
  );
};

export default Watermark;