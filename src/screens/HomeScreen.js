import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LandingScreen from "./LandingScreen";
import RecipesScreen from "./RecipesScreen";
import SavedRecipesScreen from "./SavedRecipesScreen";
import ProfileScreen from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

// bottom tab navigator
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true} styles={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Landing") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Recipes") {
              iconName = focused ? "ios-book" : "ios-book-outline";
            } else if (route.name === "Saved Recipes") {
              iconName = focused ? "ios-bookmark" : "ios-bookmark-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "black",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#EDEDED" },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 16,
            marginHorizontal: 40,
            borderRadius: 16,
            backgroundColor: "#FAFAFA",
          },
        })}
      >
        <Tab.Screen name="Landing" component={LandingScreen} />
        <Tab.Screen name="Recipes" component={RecipesScreen} />
        <Tab.Screen name="Saved Recipes" component={SavedRecipesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
