import { React, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [password, onChangedPassword] = useState("");
  const [userName, onChangedUsername] = useState("");

  return (
    <ImageBackground
      accessibility={true}
      accessibilityLabel="Login Screen Background Image"
      style={styles.background}
      source={require("../img/loginBackground.png")}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>LOG IN</Text>

        <TextInput
          style={styles.textInput}
          placeholder="MyUsername"
          value={userName}
          onChange={onChangedUsername}
          selectionColor={"#000000"}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChange={onChangedPassword}
          selectionColor={"#000000"}
        />
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.loginButton}
        >
          <Text style={styles.buttonText}>LOG IN</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  background: {
    flex: 1,
  },
  textInput: {
    backgroundColor: "grey",
    opacity: 0.5,
    width: "100%",
    color: "#000000",
    borderColor: "#F26419",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    color: "#F3F3F3",
    fontWeight: "bold",
  },
  buttonText: {
    color: "#EAEAEA",
    fontSize: 24,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "transparent",
    borderRadius: 6,
    padding: 5,
    borderWidth: 2,
    borderColor: "#F26419",
    marginVertical: 20,
    width: '100%',
  },
});
