import * as React from "react";
import { Button, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialContext } from "../context/CredentialContext";
import { AuthContext } from "../context/AuthContext";

export default function LogoutScreen() {
  const { storedCredentials, setStoredCredentials } =
    React.useContext(CredentialContext);

  const { signOut } = React.useContext(AuthContext);
  
  const clearLogin = () => {
    AsyncStorage.removeItem("frida")
      .then(() => {
        setStoredCredentials("");
        signOut()
      })
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <Button title="Sign out" onPress={clearLogin} />
    </View>
  );
}
