import React, { useState, useEffect } from "react";
import {
  Button,
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBox({clicked, searchPhrase, setSearchPhrase, setClicked}) {
  
  const close = () => {
    setClicked(false);
    setSearchPhrase("");
  };
  return (
    <>
      <View style={styles.searchBox}>
        <TextInput
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          placeholder="search for recipes..."
          onFocus={() => {
            setClicked(true);
          }}
        />
        {!clicked && <Ionicons name="search" size={24} color={"#9F9F9F"} />}
        {clicked && (
          <Pressable
            onPress={() => {
              Keyboard.dismiss();
              close();
            }}
          >
            <Ionicons name="close" size={24} color={"#9F9F9F"} />
          </Pressable>
        )}
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 40,
  },
});
