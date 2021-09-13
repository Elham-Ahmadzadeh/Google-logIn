import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SearchScreen = () => {
  return (
    <View>
      <Text style={style.myText}>Search</Text>
    </View>
  );
};
const style = StyleSheet.create({
  myText: {
    fontSize: 40,
  },
});
export default SearchScreen;
