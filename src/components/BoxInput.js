import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const BoxInput = ({title}) => {
  return (
    <View
      style={{
        width: '100%',
        // backgroundColor: 'pink',
        paddingHorizontal: 40,
        justifyContent: 'center',
        marginBottom: 20,
      }}>
      <Text style={{fontSize: 16, marginBottom: 15}}>{title}</Text>
      <TextInput
        style={{
          height: 50,
          width: '100%',
          borderWidth: 1,
          borderColor: '#C6C6C6',
          borderRadius: 15,
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

export default BoxInput;
