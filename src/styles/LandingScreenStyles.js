import { StyleSheet } from "react-native";
import { windowWidth } from "../utils/window";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  hello: {
    fontSize: 24,
  },
  question: {
    color: "#9F9F9F",
    fontSize: 16,
  },
  avatarContainer: {
    borderRadius: 50,
    backgroundColor: "grey",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 60,
  },
  categorySection: {
    marginBottom: 60,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoriesText: {
    fontSize: 24,
  },

  trendingSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 100,
  },
  trendingItem: {
    borderRadius: 8,
    width: windowWidth / 2.7,
    height: 230,
    backgroundColor: "#FFFFFF",
    margin: 8,
    alignItems: "center",
    gap: 6,
  },
  trendingImage: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 160,
    width: windowWidth / 2.7,
  },
  trendingText: {
    fontSize: 16,
  },
  viewMoreButton: {
    borderColor: "#F26419",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});
