import React from "react";
import { ScrollView } from "react-native";
import { Provider } from "react-native-paper";
import LunchMenu from "./LunchMenu";
import HomeContent from "./HomeContent";
import ContentModal from "./ContentModal";

export default function Home() {
  return (
    <Provider>
      <LunchMenu />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
        <HomeContent />
        <HomeContent />
      </ScrollView>
      <ContentModal />
    </Provider>
  );
}
