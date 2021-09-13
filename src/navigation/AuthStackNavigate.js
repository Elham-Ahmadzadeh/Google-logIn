import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginForm from "../auth/LoginForm";
import ProfileScreen from "../profile/ProfileScreen";
const AuthStack = createStackNavigator();

export default function AuthStackNavigate() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginForm"
        component={LoginForm}
        options={{ headerShown: false,
         }}
      />
    </AuthStack.Navigator>
  );
}


