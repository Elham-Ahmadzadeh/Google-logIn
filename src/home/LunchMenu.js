import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Card } from "react-native-paper";
import * as SQLite from "expo-sqlite";

import axios from "axios";

export default function LunchMenu() {
  // const db = SQLite.openDatabase('teamFrida.db');

  return (
    <SafeAreaView>
      {<Text>{console.log(lunch)}</Text>}
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
