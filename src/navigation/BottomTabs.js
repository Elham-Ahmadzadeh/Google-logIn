import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  HomeStackNavigate,
  ScheduleStackNavigate,
  ProfileStackNavigate,
} from "../navigation/AppStackNavigate";
import ChatStackNavigate from "../navigation/ChatStackNavigate";
const Tab = createMaterialBottomTabNavigator();

export default function FooterTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFFF"
      barStyle={{ backgroundColor: "#6200EE" }}
      shifting={true}
      backBehavior="initialRoute"
    >
      <Tab.Screen
        name="HomeStackNavigate"
        component={HomeStackNavigate}
        options={{
          tabBarLabel: "Hem",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatStackNavigate"
        component={ChatStackNavigate}
        options={{
          tabBarLabel: "Chatt",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wechat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ScheduleStackNavigate"
        component={ScheduleStackNavigate}
        options={{
          tabBarLabel: "Schema",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStackNavigate"
        component={ProfileStackNavigate}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
