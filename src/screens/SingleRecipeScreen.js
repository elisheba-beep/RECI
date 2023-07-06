import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowWidth } from "../utils/window";

export default function SingleRecipeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={"#434343"} />
          </Pressable>
          <Text style={styles.headerText}>Recipe</Text>
          <Pressable>
            <Ionicons name="ellipsis-vertical" size={24} color={"#434343"} />
          </Pressable>
        </View>
        <Image style={styles.image} source={require("../img/pizza.png")} />
        <Text style={styles.recipeName}>Handmade Pizza</Text>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#434343",
  },
  image: {
    marginVertical: 24,
    width: windowWidth - 60,
    borderRadius: 8,
  },
  recipeName: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
});
