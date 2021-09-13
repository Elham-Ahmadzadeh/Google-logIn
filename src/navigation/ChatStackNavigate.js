import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatHeader } from "./HeaderNavigate";
import ChatScreen from "../chat/ChatScreen";

const ChatStack = createStackNavigator();

export default function ChatStackNavigate() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          header: () => <ChatHeader title="Chatt" />,
        }}
      />
    </ChatStack.Navigator>
  );
}
