import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HomeContent />
    </View>
  );
};

const HomeContent = () => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.heading}>Welcome to Home</Text>
      <Text style={styles.content}>
        This is your home screen. Add your content here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuIcon: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 20,
    maxWidth: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    color: "#555",
  },
});

export default Home;
