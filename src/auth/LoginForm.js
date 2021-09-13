import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Headline } from "react-native-paper";
import { CredentialContext } from "../context/CredentialContext";
import * as Google from "expo-google-app-auth";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginForm() {
  const { storedCredentials, setStoredCredentials } =
    React.useContext(CredentialContext);

  const [message, setMessage] = React.useState();
  const [messageType, setMessageType] = React.useState();
  const [googleSubmitting, setGoogleSubmitting] = React.useState(false);


  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem("frida", JSON.stringify(credentials))
      .then(() => {
        handleMessage(message, status);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        handleMessage("Persisting login failed");
        console.log(error);
      });
  };

  const handleMessage = (message, type = "") => {
    setMessage(message);
    setMessageType(type);
  };

  const handleGoogleSignin = () => {
    setGoogleSubmitting(true);
    const config = {
      iosClientId: `276122307447-n88eahk858mrkmulalcu20rdisffsubu.apps.googleusercontent.com`,
      androidClientId: `276122307447-f2svjd1mhjerdfoc1iqc02dqp9ric5hc.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    
    };
  
    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == "success") {
          const { email, name, photoUrl } = user;
        
          persistLogin(
            { email, name, photoUrl },
            "Google signin successful",
            "SUCCESS"
          );
        
        } else {
          handleMessage("Google Signin was cancelled");
        }
        setGoogleSubmitting(false);
      })
      .catch((error) => {
        handleMessage("An error occurred. Check your network and try again");
        console.log(error);
        setGoogleSubmitting(false);
      });
  };
  return (
    <View style={style.container}>
      <Headline style={{ textAlign: "center", marginBottom: 20 }}>
        Login med Google
      </Headline>
      <Button
        style={style.GoogleBtn}
        mode="outlined"
        contentStyle={{ height: 44 }}
        labelStyle={{ color: "blue", fontSize: 15 }}
        icon="google"
        onPress={handleGoogleSignin}
      >
        Logga In med Google
      </Button>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
  },
  GoogleBtn: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 14,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 35,
  },
});
