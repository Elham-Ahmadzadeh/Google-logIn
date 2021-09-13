import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Appbar, Searchbar, Avatar } from "react-native-paper";
import { StyleSheet, Platform } from "react-native";

export function HeaderNavigate(props) {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.Content style={style.titleContent} title={props.title} />
      <Appbar.Action
        icon="magnify"
        onPress={() => navigation.navigate("SearchScreen")}
      />
    </Appbar.Header>
  );
}
export function SearchHeader() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate("HomeScreen")} />
      <Searchbar
        placeholder="Sök..."
        style={{ marginRight: 50, borderRadius: 20 }}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </Appbar.Header>
  );
}
export function ChatHeader(props) {
  return (
    <Appbar.Header>
      <Avatar.Text size={26} label="XD" style={style.avatarChat} />
      <Appbar.Content
        title={props.title}
        titleStyle={{ textAlign: "center" }}
      />
      <Appbar.Action
        icon="pencil-box-multiple-outline"
        style={{ marginRight: 10 }}
      />
    </Appbar.Header>
  );
}
const style = StyleSheet.create({
  titleContent: {
    alignItems: "flex-start",
    marginLeft: Platform.OS === "ios" ? -36 : 0,
  },
  avatarChat: {
    marginLeft: Platform.OS === "android" ? 0 : 10,
    backgroundColor: "white",
  },
});
