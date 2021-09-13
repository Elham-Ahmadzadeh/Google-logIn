import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Card } from "react-native-paper";

export default function LunchMenu() {
  return (
    <SafeAreaView>
      <Card style={style.container}>
        <Card.Title title="Dagens lunchmeny" />
      </Card>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});
