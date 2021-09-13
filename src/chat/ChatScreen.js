import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Chat () {
  return (
    <View>
      <Text style={style.myText}>Chatting</Text>
    </View>
  );
};
const style = StyleSheet.create({
  myText: {
    fontSize: 40
  }
});
