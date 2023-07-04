import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function CategoryItem({ url, title }) {
  return (
    <View style={styles.categoryImage}>
      <Image source={url} />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryImage: {
    gap: 5,
    margin: 8,
    alignItems: "center",
  },
});
