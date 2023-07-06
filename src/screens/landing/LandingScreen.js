import { React } from "react";
import {
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

export default function LandingScreen({ navigation }) {
  // function to render category items in a flatlist
  const renderCategoryItem = ({ item }) => (
    <CategoryItem url={item.url} title={item.title} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

        <View style={styles.searchBox}>
          <TextInput placeholder="search for recipes..." />
          <Ionicons name="search" size={24} color={"#9F9F9F"} />
        </View>

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
        <View>
          <Text style={styles.categoriesText}>Trending</Text>

          <View style={styles.trendingSection}>
            {trending.map((item, index) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate("SingleRecipe")
                  }
                >
                  <View style={styles.trendingItem} key={index}>
                    <Image
                      source={item.url}
                      resizeMode="cover"
                      style={styles.trendingImage}
                    />
                    <Text style={styles.trendingText}>{item.title}</Text>
                    <Pressable style={styles.viewMoreButton}>
                      <Text>Read More</Text>
                    </Pressable>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
