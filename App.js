import "react-native-gesture-handler";
import React, { useState, useEffect, useMemo } from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Provider as PaperProvider,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { name as appName } from "./app.json";
import { navigationRef } from "./src/navigation/RootNavigate";
import { CredentialContext } from "./src/context/CredentialContext";
import AuthStackNavigate from "./src/navigation/AuthStackNavigate";
import BottomTabs from "./src/navigation/BottomTabs";
import LoginForm from "./src/auth/LoginForm";
import AppLoading from "expo-app-loading";
import { AuthContext } from "./src/context/AuthContext";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage.getItem("frida")
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
          console.log(result);
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  const authContext = React.useMemo(() => {
    return {
      signOut: () => {
        setIsLoading(false);
      },
    };
  });
  return (
    <AuthContext.Provider value={authContext}>
      <CredentialContext.Provider
        value={{ storedCredentials, setStoredCredentials }}
      >
        <NavigationContainer initialRouteName={LoginForm} ref={navigationRef}>
          <PaperProvider>
            {!isLoading ? (
              <AppLoading
                startAsync={checkLoginCredentials}
                onFinish={() => setIsLoading(true)}
                onError={console.warn}
              />
            ) : storedCredentials === null ? (
              <AuthStackNavigate />
            ) : (
              <BottomTabs />
            )}
          </PaperProvider>
        </NavigationContainer>
      </CredentialContext.Provider>
    </AuthContext.Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
