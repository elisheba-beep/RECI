import React from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { recipes } from "../utils/recipes";
import { windowWidth } from "../utils/window";

const YourRecipe = ({ image, name, link }) => {
  return (
    <View style={styles.yourRecipe}>
      <View style={styles.recipeImage}>
        {image ? <Image source={image} width={20} height={30}/> : <Ionicons name="book" size={32} />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.recipeTitle}>{name}</Text>
        <Text>{link}</Text>
      </View>
    </View>
  );
};

export default function ProfileScreen() {
  const renderRecipes = ({ item }) => {
    return (

      <YourRecipe name={item.name} image={item.image} link={item.link}/>
      );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Tom</Text>
          <Text style={styles.question}>Welcome to your profile</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={32} />
        </View>
      </View>
      <Text style={styles.hello}>Your recipes</Text>
      <FlatList renderItem={renderRecipes} data={recipes} horizontal={false} showsVerticalScrollIndicator={false} style={styles.recipeList}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingVertical: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  hello: {
    fontSize: 24,
  },
  question: {
    color: "#9F9F9F",
    fontSize: 16,
  },
  avatarContainer: {
    borderRadius: 50,
    backgroundColor: "grey",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  yourRecipe: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    height: 130,
  },
  textContainer: {
    width: windowWidth/2,
    justifyContent: "center",
  },
  recipeTitle: {
    fontSize: 16,
    color: "tomato",
  },
  recipeImage: {
    width: 20,
    height: 32,
  },
  recipeList:{
    marginBottom: 70
  }
});
