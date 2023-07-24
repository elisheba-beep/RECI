import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, description }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{description}</Text>
  </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
 
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return (
        <TouchableWithoutFeedback onPress={()=>{}}>
          <Item name={item.name} description={item.description} />
        </TouchableWithoutFeedback>
      );
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} description={item.description} />;
    }
    // filter of the description
    if (
      item.description
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} description={item.description} />;
    }
  };

  return (
    <View
      style={styles.list__container}
      onStartShouldSetResponder={() => {
        setClicked(false);
      }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        removeClippedSubviews={true}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
