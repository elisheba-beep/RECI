import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SingleRecipeScreen from "../SingleRecipeScreen";
import LandingScreen from "./LandingScreen";

const Stack = createNativeStackNavigator();

export default function Landing() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="SingleRecipe" component={SingleRecipeScreen} />
    </Stack.Navigator>
  );
}
