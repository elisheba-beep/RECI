import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryItem from "../components/CategoryItem";
import { categories } from "../utils/category";
import { trending } from "../utils/trending";
import { windowWidth } from "../utils/window";
import SearchBox from "../components/SearchBox";

const Recipe = ({ url, title }) => {
  return (
    <View style={styles.categoryImage}>
      <Image source={url} style={styles.image} />
      <Text style={styles.itemText}>{title}</Text>
    </View>
  );
};

export default function SavedRecipesScreen() {
  const renderRecipes = ({ item }) => (
    <Recipe url={item.url} title={item.title} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>saved recipes</Text>
      <SearchBox />
      <FlatList
        renderItem={renderRecipes}
        data={trending}
        numColumns={3}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    color: "tomato",
    textAlign: "center",
    marginBottom: 20,
  },
  categoryImage: {
    gap: 5,
    margin: 8,
    alignItems: "center",
    width: windowWidth / 4,
  },
  image: {
    width: windowWidth / 4.7,
    height: 100,
    borderRadius: 10,
  },
  itemText: {
    textAlign: "center",
  },
});
