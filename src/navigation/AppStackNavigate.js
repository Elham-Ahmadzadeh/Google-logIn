import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../home/HomeScreen";
import ScheduleScreen from "../schedule/ScheduleScreen";
import ProfileScreen from "../profile/ProfileScreen";
import { HeaderNavigate, SearchHeader } from "./HeaderNavigate";
import SearchScreen from "../search/SearchScreen";
import LogoutScreen from "../profile/LogoutScreen";

const RootStack = createStackNavigator();

export function HomeStackNavigate() {
  return (
    <RootStack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => <HeaderNavigate title="hem" />,
        }}
      />
      <RootStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          header: () => <SearchHeader />,
        }}
      />
    </RootStack.Navigator>
  );
}

export function ScheduleStackNavigate() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{
          header: () => <HeaderNavigate title="Kalender" />,
        }}
      />
    </RootStack.Navigator>
  );
}

export function ProfileStackNavigate() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          header: () => <HeaderNavigate title="profil" />,
        }}
      />
         <RootStack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
      />
    </RootStack.Navigator>
  );
}
