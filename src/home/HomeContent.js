import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Avatar, Provider } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

export default function HomeContent() {
  const LeftContent = (props) => (
    <Avatar.Text size={24} label="AE" {...props} />
  );
  const RightContent = (props) => (
    <Feather
      {...props}
      name="more-vertical"
      size={24}
      color="black"
      onPress={() => {}}
    />
  );
  return (
    <Provider>
      <Card style={style.container}>
        <Card.Title
          title="Anna Eriksson"
          subtitle="8 augusti 08.00"
          left={LeftContent}
          right={RightContent}
        />
        <Card.Content>
          <Title>Välkomna till kursstart 12/8!</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
    </Provider>
  );
}

const style = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
