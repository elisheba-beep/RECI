import { Reac, useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryItem from "../components/CategoryItem";
import { categories } from "../utils/category";
import { trending } from "../utils/trending";
import { windowWidth } from "../utils/window";
import SearchBox from "../components/SearchBox";
import { getRecipes } from "../api/tasty";
import { ActivityIndicator } from "react-native";

const Recipe = ({ url, title }) => {
  return (
    <View style={styles.categoryImage}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.itemText} numberOfLines={2}>{title}</Text>
    </View>
  );
};

export default function RecipesScreen() {
  const renderRecipes = ({ item }) => (
    <Recipe url={item.thumbnail_url} title={item.name} />
    
  );
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const myRecipes = async () => {
    try {
      const recipes = await getRecipes();
      setData(recipes);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    myRecipes();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>recipes</Text>
      <SearchBox />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          renderItem={renderRecipes}
          data={data}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      )}
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
    width: windowWidth / 2.5,
    margin: 8,
  },
  image: {
    width: windowWidth / 2.5,
    borderRadius: 10,
  },
  itemText: {
    textAlign: "center",
    
  },
});
