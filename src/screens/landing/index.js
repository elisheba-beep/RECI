import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SingleRecipeScreen from "../SingleRecipeScreen";
import LandingScreen from "./LandingScreen";
import List from "../../components/List";

const Stack = createNativeStackNavigator();

export default function Landing() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="SingleRecipe" component={SingleRecipeScreen} />
    </Stack.Navigator>
  );
}
