import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      accessibility={true}
      accessibilityLabel="Login Screen Background Image"
      style={styles.background}
      source={require("../img/loginBackground.png")}
    >
      <SafeAreaView style={styles.container}>
        <View></View>
        <View>
          <Text style={styles.title}>RECI</Text>
          <Text style={styles.subTitle}>COOK IT YOURSELF</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={styles.registerButton}
          >
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("LogIn")}
            style={styles.loginButton}
          >
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
  },
  background: {
    flex: 1,
  },
  title: {
    fontSize: 76.5,
    color: "#F3F3F3",
  },
  subTitle: {
    fontSize: 16,
    color: "#F3F3F3",
  },
  registerButton: {
    backgroundColor: "#F26419",
    borderRadius: 6,
    padding: 5,
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: "transparent",
    borderRadius: 6,
    padding: 5,
    borderWidth: 2,
    borderColor: "#F26419",
    marginVertical: 20,
  },
  buttonContainer: {
    width: "100%",
  },
  buttonText: {
    color: "#EAEAEA",
    fontSize: 24,
    textAlign: "center",
  },
});
