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
import { ingredients } from "../utils/ingredients";

export default function SingleRecipeScreen({route, navigation }) {
  const { recipeName, recipeUrl, prepTime, totalTime, servings } = route.params;
  
let yields = servings.charAt(servings.length - 1);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={"#434343"} />
          </Pressable>
          <Text style={styles.headerText}>Recipe</Text>
          <Pressable>
            <Ionicons name="ellipsis-vertical" size={24} color={"#434343"} />
          </Pressable>
        </View>
        <Image style={styles.image} source={{uri: recipeUrl}} />
        <Text style={styles.recipeName}>{recipeName}</Text>
        <View style={styles.recipeDetails}>
          <View>
            <Text style={styles.detailValue}>{prepTime} mins</Text>
            <Text>Prep Time</Text>
          </View>
          <View>
            <Text style={styles.detailValue}>{parseInt(totalTime) - parseInt(prepTime)} mins</Text>
            <Text>Cook Time</Text>
          </View>
          <View>
            <Text style={styles.detailValue}>{yields}</Text>
            <Text>Servings</Text>
          </View>
        </View>
        <View style={styles.ingredientsHeader}>
          <Text style={styles.ingredientsHeaderText}>Ingredients</Text>
          <Text style={styles.ingredientsHeaderSubtext}>
            {ingredients.length} item{ingredients.length > 1 && "s"}
          </Text>
        </View>
        <View style={styles.ingredientsContainer}>
          {ingredients.map((item, index) => {
            return (
              <View style={styles.ingredientRow} key={index}>
                <Text style={styles.ingredientText}>{item.name}</Text>
                <Text>{item.value}</Text>
              </View>
            );
          })}
        </View>
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
  recipeDetails: {
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    marginVertical: 24,
  },
  detailValue: {
    color: "#F26419",
    fontSize: 24,
    fontWeight: "600",
  },
  ingredientsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  ingredientsHeaderText: {
    color: "#434343",
    fontSize: 24,
    fontWeight: "500",
  },
  ingredientsHeaderSubtext: {
    color: "#434343",
  },
  ingredientsContainer: {
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    padding: 18,
    marginBottom: 70,
  },
  ingredientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  ingredientText: {
    fontWeight: "600",
  },
});
