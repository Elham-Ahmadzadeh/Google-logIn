import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Avatar,
  List,
  Switch,
} from "react-native-paper";

import { CredentialContext } from "../context/CredentialContext";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  const { storedCredentials, setStoredCredentials } =
    React.useContext(CredentialContext);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const { name, email, photoUrl } = storedCredentials;

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView>
      <ScrollView>
        <Card>
          <Avatar.Image size={44} source={{ uri: photoUrl }} />
        </Card>
        <Card style={style.container}>
          <Title style={style.myTitle}>{name || "Anna Eriksson"}</Title>
          <Paragraph style={style.myTitle}>Student</Paragraph>
        </Card>
        <Card style={style.mailContainer}>
          <List.Section>
            <List.Item title={email} left={() => <List.Icon icon="email" />} />
            <List.Item
              title="070-123 45 67"
              left={() => <List.Icon color="#000" icon="phone" />}
            />
          </List.Section>
        </Card>
        <Card>
          <List.Section>
            <List.Item title="Program: Ekonomiprogrammet" />
            <List.Item title="År: EK2020" />
            <List.Item title="Mentor: Lisa Larsson" />
          </List.Section>
        </Card>
        <Card style={style.switchContainer}>
          <List.Section>
            <List.Item
              title="Visa mitt nummer i appen?"
              right={() => (
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
              )}
            />
          </List.Section>
          <Text onPress={() => navigation.navigate("LogoutScreen")}>
            Logout
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  myTitle: {
    textAlign: "center",
    color: "#6200EE",
  },
  switchContainer: {
    marginVertical: 10,
  },
  mailContainer: {
    marginVertical: 10,
  },
});
