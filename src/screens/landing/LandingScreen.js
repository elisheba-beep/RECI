import { React, useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CategoryItem from "../../components/CategoryItem";
import { categories } from "../../utils/category";
import { trending } from "../../utils/trending";
import { styles } from "../../styles/LandingScreenStyles";
import { getRecipes } from "../../api/tasty";
import SearchBox from "../../components/SearchBox";
import List from "../../components/List";

export default function LandingScreen({ navigation }) {
  // function to render category items in a flatlist
  const renderCategoryItem = ({ item }) => (
    <CategoryItem url={item.url} title={item.title} />
  );
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [more, setMore] = useState(false);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

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
    <SafeAreaView style={styles.safeArea}>
      {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> */}
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello, Tom</Text>
          <Text style={styles.question}>What do you like to cook?</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={32} />
        </View>
      </View>

      <SearchBox
        clicked={clicked}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      {clicked && (
        <List searchPhrase={searchPhrase} setClicked={setClicked} data={data}
        />
      )}
      {/* categories section */}
      <View style={styles.categorySection}>
        <View style={styles.categories}>
          <Text style={styles.categoriesText}>Categories</Text>
          <Pressable>
            <Ionicons name="arrow-forward" size={24} color={"#000000"} />
          </Pressable>
        </View>

        <FlatList
          renderItem={renderCategoryItem}
          data={categories}
          horizontal={true}
        />
      </View>

      {/* trending section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.categoriesText}>Trending</Text>

        <View style={styles.trendingSection}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            data.map((recipe, index) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate("SingleRecipe", {
                      recipeName: recipe.name,
                      recipeUrl: recipe.thumbnail_url,
                      prepTime: recipe.prep_time_minutes,
                      totalTime: recipe.total_time_minutes,
                      servings: recipe.yields,
                    })
                  }
                >
                  <View style={styles.trendingItem} key={index}>
                    <Image
                      source={{ uri: recipe.thumbnail_url }}
                      resizeMode="cover"
                      style={styles.trendingImage}
                    />
                    <Text style={styles.trendingText} numberOfLines={2}>
                      {recipe.name}
                    </Text>
                    <Pressable style={styles.viewMoreButton} onPress={() => {}}>
                      <Text>{more ? "Read Less" : "Read More"}</Text>
                    </Pressable>
                  </View>
                </Pressable>
              );
            })
          )}
        </View>
      </ScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
