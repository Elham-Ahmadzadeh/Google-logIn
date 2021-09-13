import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  Title,
  Modal,
  Portal,
  FAB,
  TextInput,
  Button,
} from "react-native-paper";

export default function ContentModal() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  /*  const [text, setText] = React.useState(""); */
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
  };
  return (
    <Portal>
      <FAB style={style.fab} small icon="plus" onPress={showModal} />
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <SafeAreaView>
          <Title>Skapa ett inlägg:</Title>
          <TextInput
            mode="outlined"
            label="Rubrik"
            placeholder="Skriv en rubrik"
            maxLength={25}
            right={<TextInput.Affix text="/25" />}
          />
          <TextInput
            style={style.inputTextContainer}
            mode="outlined"
            label="Text"
            placeholder="Skriv ditt inlägg"
            multiline={true}
            maxLength={100}
            right={<TextInput.Affix text="/100" />}
          />
          <Button mode="contained" onPress={() => console.log("Pressed")}>
            Publicera
          </Button>
        </SafeAreaView>
      </Modal>
    </Portal>
  );
}
const style = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  inputTextContainer: {
    height: 100,
    paddingVertical: 20,
  },
});
